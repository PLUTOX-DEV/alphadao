import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true }, // sparse = optional
  telegramId: { type: String, unique: true, sparse: true },
  name: { type: String },
  username: { type: String },
  password: { type: String }, // Only for local auth
  picture: { type: String },
  provider: { type: String, default: "local" }, // local, google, telegram
});

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
