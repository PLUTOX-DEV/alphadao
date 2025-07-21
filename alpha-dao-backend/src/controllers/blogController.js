const Blog = require("../models/Blog");

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author", "email");
  res.json(blogs);
};

exports.createBlog = async (req, res) => {
  const blog = await Blog.create({ ...req.body, author: req.user._id });
  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
