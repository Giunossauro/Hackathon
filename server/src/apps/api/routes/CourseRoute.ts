import express from "express";
import { CourseController } from "../controllers/CourseController";

const router = express.Router();
const _controller = new CourseController();

router.get("/cursos", _controller.getCourses);
router.get("/cursos/:id", _controller.getCourseById);
router.get("/cursos/:query", _controller.getCoursesByName);
router.post("/cursos", _controller.addCourse);
router.put("/cursos/:id", _controller.updateCourse);
router.delete("/cursos/:id", _controller.removeCourse);

export = router;