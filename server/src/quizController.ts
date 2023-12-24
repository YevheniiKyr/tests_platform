import {NextFunction, Response, RequestHandler, Request} from "express";
import {Message, QuizBody} from "./types/ApiTypes";
import quizService from "./quizService";

class QuizController {
    //<params, reqbody, resbody, queryparams>
    createQuiz: RequestHandler<{ id: string }, { }, {quiz: any}, {}> = async (req, res, next) => {
        console.log("WE ARE IN CONTROLLER")
        const quizBody: QuizBody = req.body;
        let newQuiz = await quizService.addQuiz(quizBody);
        console.log("CREATED NEW")
        return res.status(201).json({quiz: newQuiz});
    };

    getQuiz: RequestHandler<{ id: string }, {}, {}, {}> = async (req, res, next) => {
        const quizId: string = req.params.id;
        let quiz = await quizService.findQuiz(quizId)
        return res.status(201).json({quiz:quiz});
    };

    getAllQuizzes: RequestHandler<{}, {}, {}, {}> = async (req, res, next) => {
        let quiz = await quizService.findAllQuizzes()
        return res.status(201).json({quizzes:quiz});
    };

    updateQuiz: RequestHandler<{ id: string }, {}, QuizBody, {}> = async (req, res, next) => {
        const quizId: string = req.params.id;
        const quizBody: QuizBody = req.body;
        let quiz = await quizService.editQuiz(quizId, quizBody)
        return res.status(201).json({quiz:quiz});
    };

    deleteQuiz: RequestHandler<{ id: string }, {}, {}, {}> = async (req, res, next) => {
        const quizId: string = req.params.id;
        let quiz = await quizService.removeQuiz(quizId)
        return res.status(201).json({quiz:quiz});
    };

}

export default new QuizController()