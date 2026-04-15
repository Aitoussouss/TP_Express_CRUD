const express = require("express");
const productRouter=express.Router();
const {getdata}=require("./controllers/productController")


productRouter.get("/", getdata());

// =====================
// CREATE
// =====================
productRouter.get("/add", (req, res) => {
  res.render("add");
});

productRouter.post("/add", async (req, res) => {
  await Product.create(req.body);
  res.redirect("/");
});

// =====================
// UPDATE
// =====================
productRouter.get("/edit/:id", async (req, res) => {
  const produit = await Product.findById(req.params.id);
  res.render("edit", { produit });
});

productRouter.put("/edit/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

// =====================
// DELETE
// =====================
productRouter.delete("/delete/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/");
});
module.exports = productRouter;
