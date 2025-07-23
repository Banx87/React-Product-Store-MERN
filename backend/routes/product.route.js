import express from "express";
import {
	createProduct,
	deleteProduct,
	getProducts,
	updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// GET ALL PRODUCTS
router.get("/", getProducts);

// CREATE A NEW PRODUCT
router.post("/", createProduct);

// UPDATE A PRODUCT
router.put("/:id", updateProduct);

// DELETE A PRODUCT
router.delete("/:id", deleteProduct);

export default router;
