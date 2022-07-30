import express from "express";
import { TeacherController } from "../controllers/TeacherController";

const router = express.Router();
const _controller = new TeacherController();

router.get("/professores", _controller.getTeachers);
router.get("/professores/:id", _controller.getTeacherById);
router.get("/busca/professores/nome", _controller.getTeachersByName);
router.get("/busca/professores/nome", _controller.getTeacherByEmail);
router.post("/professores", _controller.addTeachers);
router.put("/professores/:id", _controller.updateTeacher);
router.delete("/professores/:id", _controller.removeTeacher);

export = router;