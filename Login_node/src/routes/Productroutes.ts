import express from "express";
import {
  createProduct,
  getProduct,
} from "../controller/Product/Productcontroller";
import { auth } from "../middleware/auth";

const router = express.Router();

router.post("/products", auth, createProduct);
router.get("/products", auth, getProduct);
export default router;
