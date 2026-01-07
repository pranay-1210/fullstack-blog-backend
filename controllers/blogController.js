exports.getBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({status: "success", blogs});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 