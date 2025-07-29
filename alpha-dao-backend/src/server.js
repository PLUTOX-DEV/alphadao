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

// Serve static files from /uploads with CORS-friendly headers
app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "uploads"), {
    setHeaders: (res) => {
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);

// Root test route
app.get("/", (req, res) => {
  res.json({ message: "✅ Alpha DAO backend is running!" });
});

// App routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/admin", adminRoutes);

// 404 route handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

// Start server after DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error", err);
  });
