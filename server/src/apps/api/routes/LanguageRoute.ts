import express from "express";
import { LanguageController } from "../controllers/LanguageController";

const router = express.Router();
const _controller = new LanguageController();

router.get("/linguagens", _controller.getLanguages);
router.get("/linguagens/:id", _controller.getLanguageById);
router.post("/linguagens", _controller.addLanguages);
router.put("/linguagens/:id", _controller.updateLanguage);
router.delete("/linguagens/:id", _controller.removeLanguage);

export = router;