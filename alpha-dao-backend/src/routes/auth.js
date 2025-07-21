import express from "express";
import { signup, login } from "../controllers/authController.js";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";
import path from "path";
import nodemailer from "nodemailer";
import User from "../models/User.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// 🟢 GOOGLE CLIENT
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// 🟢 MULTER SETUP
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

// =====================================================================
// 🟢 AUTH ROUTES
// =====================================================================

// REGISTER
router.post("/register", signup);

// LOGIN
router.post("/login", login);

// GOOGLE OAUTH
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

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

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

// =====================================================================
// 🟢 PROFILE ROUTES
// =====================================================================

// GET CURRENT USER
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

// UPDATE PROFILE
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

// =====================================================================
// 🟢 ADMIN/DEBUG ROUTES
// =====================================================================

// GET ALL USERS
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.error("Fetch users error:", err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// =====================================================================
// 🟢 CONTACT FORM
// =====================================================================

// STATUS CHECK
router.get("/contact", (req, res) => {
  res.json({
    success: true,
    message: "Contact endpoint is live. Use POST to submit the form.",
  });
});

// SUBMIT FORM
router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, enquiry, message } = req.body;

  console.log("📨 Received contact form submission:", {
    firstName,
    lastName,
    email,
    enquiry,
    message,
  });

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
      to: "oken",
      subject: `New ${enquiry} enquiry`,
      text: message,
      html: `<p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully.");
    res.json({ success: true, message: "Email sent" });
  } catch (err) {
    console.error("❌ Failed to send email:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

export default router;
