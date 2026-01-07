// Load environment variables FIRST
require("dotenv").config({
  path: ".env.production"
});


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const errorController = require("./controllers/errorController");
const blogRouter = require("./routers/blogRouter");
const mongoose = require("mongoose");


// MongoDB connection URL
const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@todoapp.ul2jllf.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.use("/api",blogRouter);
app.use(errorController.get404);

// Server port
const PORT = process.env.PORT || 3006;
// MongoDB Connection + Server Start
mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err.message);
  });