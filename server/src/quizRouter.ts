import express from "express";
import controller from "./quizController.js";
// import { Schemas, ValidateQuiz } from "./middlewares/ValidateQuiz.js";
import { tryCatch } from "./utils/tryCatch.js"
const router = express.Router();

router.post(
    "/",
    // tryCatch(ValidateTask(Schemas.task.create)),
    tryCatch(controller.createQuiz),
);

router.get("/:id", tryCatch(controller.getQuiz));
router.get("/", tryCatch(controller.getAllQuizzes));
router.patch(
    "/:id",
    // tryCatch(ValidateTask(Schemas.task.update)),
    tryCatch(controller.updateQuiz),
);
router.delete("/:id", tryCatch(controller.deleteQuiz));
export default router;