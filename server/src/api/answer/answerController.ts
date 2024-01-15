import {RequestHandler} from "express";
import answerService from "./answerService";
import {QuizAnswer, Result} from "../../types/AnswerTypes";

class AnswerController {
    checkAnswers: RequestHandler = async (req, res, next) => {
        const answers: QuizAnswer = req.body;
        console.log('ANSWERS', answers)

        answerService.checkAnswers(answers, req.params.quizId).then(answers => {
            return res.status(201).json({
                correct: answers.correct,
                total: answers.total
            })
        })
    }
}

export default new AnswerController()
