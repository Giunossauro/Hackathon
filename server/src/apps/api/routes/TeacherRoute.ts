import express from "express";
import { TeacherController } from "../controllers/TeacherController";

const router = express.Router();
const _controller = new TeacherController();

router.get("/teachers", _controller.getTeachers);
router.get("/teachers/:id", _controller.getTeacherById);
router.post("/teachers", _controller.addTeachers);

export = router;