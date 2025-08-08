import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true, // prevent duplicate emails
    sparse: true, // allow multiple nulls (for TON, Telegram users)
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  telegramId: {
    type: String,
    unique: true,
    sparse: true,
  },
  wallet: {
    type: String,
    unique: true,
    sparse: true,
  },
  name: { type: String },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    sparse: true,
  },
  password: { type: String },
  picture: { type: String },
  provider: {
    type: String,
    enum: ["local", "google", "telegram", "ton"],
    default: "local",
  },
}, { timestamps: true });

// ✅ Hash password before saving (only if modified)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// ✅ Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  if (!this.password) return false;
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
