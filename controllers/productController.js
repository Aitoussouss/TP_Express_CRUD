const Product = require("./models/Product");

exports.getdata=async (req, res) => {
  const produits = await Product.find();
  res.render("index", { produits });
}