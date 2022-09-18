import express from "express";
import { getProducts, newItem } from "../controllers/products.js";
const router = express.Router();

router.get("/", getProducts);
router.post("/", newItem);

export default router;
