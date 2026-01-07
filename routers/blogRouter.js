const express = require("express");

const blogController = require("../controllers/blogController");
const blogRouter = express.Router();

blogRouter.get("/blogs", blogController.getBlogs);
blogRouter.post("/blogs", blogController.createBlog);
blogRouter.delete("/blogs/:id", blogController.deleteBlog);


module.exports = blogRouter;
