import express from "express";
import {Schemas, ValidateQuiz} from "../../middlewares/ValidateQuiz";
import {tryCatch} from "../../utils/tryCatch";
import controller from "./answerController";
const router = express.Router();

router.post(
    "/:quizId/answers",
    tryCatch(controller.checkAnswers),
);

export default router;