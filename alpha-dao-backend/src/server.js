// server.js
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blog.js";
import adminRoutes from "./routes/admin.js";
const bot = require("./bot"); // Make sure this is imported

dotenv.config();

const app = express();

// Security Headers
app.use(
  helmet({
    crossOriginOpenerPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

// Enable CORS for your frontend
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://alphadao.vercel.app",
    credentials: true,
  })
);

// Parse JSON bodies
app.use(express.json());

// Serve static files from /uploads
app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"), {
    setHeaders: (res) => {
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);
// Telegram webhook endpoint
app.post(`/bot${process.env.TELEGRAM_BOT_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Test route
app.get("/", (req, res) => {
  res.json({ message: "✅ Alpha DAO backend is running!" });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/admin", adminRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

// Connect to DB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });

    // 🟢 Start the bot after server is running
    bot.launch();
    console.log("🤖 Telegram bot started");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error", err);
  });
