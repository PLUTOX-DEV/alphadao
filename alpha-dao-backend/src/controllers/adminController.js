const User = require("../models/User");
const Blog = require("../models/Blog");

// Users
exports.getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.updateUserRole = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  user.role = req.body.role;
  await user.save();
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

// Blogs
exports.updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title, content: req.body.content },
    { new: true }
  );
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
};
