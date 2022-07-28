import express from "express";
import { StudentController } from "../controllers/StudentController";

const router = express.Router();
const _controller = new StudentController();

router.get("/alunos", _controller.getStudents);
router.get("/alunos/:id", _controller.getStudentById);
router.post("/alunos", _controller.addStudents);
router.put("/alunos/:id", _controller.updateStudent);
router.delete("/alunos/:id", _controller.removeStudent);

export = router;