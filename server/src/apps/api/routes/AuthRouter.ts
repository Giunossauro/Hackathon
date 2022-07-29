import express from "express";
import { AuthController } from "../controllers/AuthController";

const router = express.Router();
const _controller = new AuthController();

router.post('/login', _controller.signIn);

export = router;