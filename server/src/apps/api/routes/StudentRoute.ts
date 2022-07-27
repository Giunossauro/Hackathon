import express from "express";
import { StudentController } from "../controllers/StudentController";

const router = express.Router();
const _controller = new StudentController();

router.get("/", _controller.getStudents);

export = router;