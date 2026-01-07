const express = require("express");

const blogController = require("../controllers/blogController");
const blogRouter = express.Router();

blogRouter.get("/blogs", blogController.getBlogs);
blogRouter.post("/blogs", blogController.createBlog);


module.exports = blogRouter;
