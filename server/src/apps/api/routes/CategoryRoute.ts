import express from "express";
import { CategoryController } from "../controllers/CategoryController";

const router = express.Router();
const _controller = new CategoryController();

router.get("/categorias", _controller.getCategories);
router.get("/categorias/:id", _controller.getCategoryById);
router.post("/categorias", _controller.addCategories);
router.put("/categorias/:id", _controller.updateCategory);
router.delete("/categorias/:id", _controller.removeCategory);

export = router;