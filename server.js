const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

// config
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/tpcrud")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const productRouter = require("./routes/productRouter");
app.use("/", productRouter);
// server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


