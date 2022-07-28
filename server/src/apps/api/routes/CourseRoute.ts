import express from "express";
import { CourseController } from "../controllers/CourseController";

const router = express.Router();
const _controller = new CourseController();

router.get("/cursos", _controller.getCourses);
router.get("/cursos/:id", _controller.getCourseById);
router.post("/cursos", _controller.addCourses);

export = router;