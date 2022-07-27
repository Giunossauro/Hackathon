import express from "express";
import { TeacherController } from "../controllers/TeacherController";

const router = express.Router();
const _controller = new TeacherController();

router.get("/professores", _controller.getTeachers);
router.get("/professores/:id", _controller.getTeacherById);
router.post("/professores", _controller.addTeachers);

export = router;