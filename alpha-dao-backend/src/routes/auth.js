import express from "express";
import { signup, login } from "../controllers/authController.js";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";
import path from "path";
import nodemailer from "nodemailer";
import crypto from "crypto";
import User from "../models/User.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ---------------------------------------------
// 🔧 Multer for profile images
// ---------------------------------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only image files are allowed"), false);
  },
});

// ---------------------------------------------
// 🔐 AUTH ROUTES
// ---------------------------------------------

router.post("/register", signup);
router.post("/login", login);

// ✅ Google OAuth
router.post("/google", async (req, res) => {
  const { idToken } = req.body;
  if (!idToken) return res.status(400).json({ message: "No ID token provided" });

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    let user = await User.findOne({ email: payload.email });

    if (!user) {
      user = new User({
        email: payload.email,
        name: payload.name || payload.email.split("@")[0],
        picture: payload.picture,
        provider: "google",
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      message: "Google sign-in successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        picture: user.picture,
      },
    });
  } catch (err) {
    console.error("Google OAuth error:", err);
    res.status(500).json({ message: "Failed to verify Google token" });
  }
});

// ✅ Telegram OAuth
router.post("/telegram", async (req, res) => {
  const { id, first_name, last_name, username, photo_url, auth_date, hash } = req.body;

  const dataCheckString = Object.entries(req.body)
    .filter(([key]) => key !== "hash")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

  const secretKey = crypto
    .createHash("sha256")
    .update(process.env.TELEGRAM_BOT_TOKEN)
    .digest();

  const hmac = crypto.createHmac("sha256", secretKey).update(dataCheckString).digest("hex");

  if (hmac !== hash) {
    return res.status(403).json({ message: "Invalid Telegram hash" });
  }

  try {
    let user = await User.findOne({ telegramId: id });

    if (!user) {
      user = new User({
        telegramId: id,
        name: `${first_name} ${last_name || ""}`.trim(),
        username,
        picture: photo_url,
        provider: "telegram",
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id, telegramId: user.telegramId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      message: "Telegram login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        picture: user.picture,
      },
    });
  } catch (err) {
    console.error("Telegram Auth Error:", err);
    res.status(500).json({ message: "Telegram authentication failed" });
  }
});

// ✅ TON Wallet Login
router.post("/ton", async (req, res) => {
  const { wallet } = req.body;

  if (!wallet) {
    return res.status(400).json({ error: "Wallet address is required" });
  }

  try {
    // Optional: Save to session (skip if session isn't configured or needed)
    if (req.session) {
      req.session.user = { wallet };
    }

    let user = await User.findOne({ tonWallet: wallet });

    if (!user) {
      user = new User({
        tonWallet: wallet,
        name: `TON_${wallet.slice(0, 6)}`,
        provider: "ton",
      });

      await user.save();
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("Missing JWT_SECRET in environment variables");
    }

    const token = jwt.sign({ id: user._id, wallet: user.tonWallet }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.json({
      message: "TON wallet login successful",
      token,
      user: {
        id: user._id,
        wallet: user.tonWallet,
        name: user.name,
      },
    });
  } catch (err) {
    console.error("TON Wallet Login Error:", err.message || err);
    return res.status(500).json({ error: "Failed to log in with TON wallet" });
  }
});

// ---------------------------------------------
// 👤 USER PROFILE ROUTES
// ---------------------------------------------
router.get("/me", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("Get user error:", err);
    res.status(401).json({ message: "Invalid token" });
  }
});

router.put("/me", upload.single("picture"), async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { name, username, password } = req.body;
    const updateData = {};

    if (name) updateData.name = name;
    if (username) updateData.username = username;
    if (req.file) updateData.picture = `/uploads/${req.file.filename}`;
    if (password) updateData.password = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true }).select(
      "-password"
    );

    res.json({ message: "Profile updated successfully", user: updatedUser });
  } catch (err) {
    console.error("Profile update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------------------------------------
// 👨‍💻 ADMIN
// ---------------------------------------------
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.error("Fetch users error:", err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// ---------------------------------------------
// ✉️ CONTACT FORM
// ---------------------------------------------
router.get("/contact", (req, res) => {
  res.json({
    success: true,
    message: "Contact endpoint is live. Use POST to submit the form.",
  });
});

router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, enquiry, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "Officialalphadao@gmail.com",
      subject: `New ${enquiry} enquiry`,
      text: message,
      html: `<p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent" });
  } catch (err) {
    console.error("❌ Failed to send email:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

export default router;
