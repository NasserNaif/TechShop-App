import express from "express";
const app = express();
import dotenv from "dotenv";
import products from "./data/products.js";

dotenv.config();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/products", function (req, res) {
  res.send(products);
});
app.get("/products/:id", function (req, res) {
  const id = req.params.id;
  const product = products.find((p) => p._id === id);
  res.send(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server Running on Port ${PORT} in ${process.env.NODE_ENV}`)
);
