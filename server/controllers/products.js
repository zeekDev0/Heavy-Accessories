import Products from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();

    res.status(200).json(Products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const newItem = (req, res) => {
  res.send("Item Created");
};
