import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
});

const Products = mongoose.model("Products", productSchema);

export default Products;
