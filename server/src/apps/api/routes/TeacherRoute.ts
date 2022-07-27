import express from "express";
import { TeacherController } from "../controllers/TeacherController";

const router = express.Router();
const _controller = new TeacherController();

router.get("/", _controller.getTeachers);
router.get("/:id", _controller.getTeacherById);
router.post("/", _controller.addTeachers);

export = router;