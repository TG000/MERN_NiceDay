import express from "express";
const router = express.Router();
import {
	createCategory,
	updateCategory,
} from "../controllers/categoryController";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware";

router.route("/").post(authenticate, authorizeAdmin, createCategory);
router.route("/:categoryId").put(authenticate, authorizeAdmin, updateCategory);
// router
// 	.route("/:categoryId")
// 	.delete(authenticate, authorizeAdmin, removeCategory);

export default router;
