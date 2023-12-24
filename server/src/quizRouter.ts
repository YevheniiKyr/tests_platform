import express from "express";
import controller from "./quizController";
import { tryCatch } from "./utils/tryCatch"
import {Schemas, ValidateQuiz} from "./middlewares/ValidateQuiz";
const router = express.Router();

router.post(
    "/",
    ValidateQuiz(Schemas.quiz.create),
    tryCatch(controller.createQuiz),
);

router.get(
    "/:id",
    tryCatch(controller.getQuiz)
);

router.get(
    "/",
    tryCatch(controller.getAllQuizzes)
);

router.patch(
    "/:id",
    tryCatch(ValidateQuiz(Schemas.quiz.update)),
    tryCatch(controller.updateQuiz),
);

router.delete(
    "/:id",
    tryCatch(controller.deleteQuiz)
);
export default router;