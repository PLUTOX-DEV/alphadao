const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authMiddleware");
const { getBlogs, createBlog, deleteBlog } = require("../controllers/blogController");

router.get("/", getBlogs);
router.post("/", auth, createBlog);
router.delete("/:id", auth, deleteBlog);

module.exports = router;
