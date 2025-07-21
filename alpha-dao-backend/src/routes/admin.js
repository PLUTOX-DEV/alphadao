import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

const ADMIN_USERNAME = "superadmin";
const ADMIN_PASSWORD = "supersecret"; // change to something strong

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "2h" });
    return res.json({ token });
  }
  return res.status(401).json({ message: "Invalid admin credentials" });
});

// Auth middleware
const adminAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") throw new Error("Not admin");
    next();
  } catch {
    return res.status(403).json({ message: "Forbidden" });
  }
};

// Get all users
router.get("/users", adminAuth, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

export default router;
