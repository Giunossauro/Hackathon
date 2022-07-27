import express from "express";
import { StudentController } from "../controllers/StudentController";

const router = express.Router();
const _controller = new StudentController();

router.get("/alunos", _controller.getStudents);
router.get("/alunos/:id", _controller.getStudentById);
router.post("/alunos", _controller.addStudents);

export = router;