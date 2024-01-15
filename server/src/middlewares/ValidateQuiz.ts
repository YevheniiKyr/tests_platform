import Joi, {ObjectSchema, string, object, array, boolean} from 'joi';
import {NextFunction, Request, Response} from 'express';
import {Category, QuizBody} from "../types/QuizTypes";
import {Option, Question} from "../types/QuizTypes";
import ValidationException from "../Exceptions/ValidationException";

export const ValidateQuiz = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("begin validation process")
            await schema.validateAsync(req.body);
            console.log("end validation process")
            next()
        } catch (error) {
            console.log("CATCH VALIDATION ERROR")
            next(new ValidationException(error.message));
        }
    };
};

export const Schemas = {
    quiz: {
        create: Joi.object<QuizBody>({
            name: Joi.string().required().min(3),
            author: Joi.string().required().min(3),
            questions: Joi.array().items(
                Joi.object<Question>({
                    text: Joi.string().min(3).required(),
                    options: Joi.array().items(
                        Joi.object<Option>({
                            text: Joi.string().required().min(1).required(),
                            correct: Joi.boolean().required()
                        })).required().min(1),
                    category: Joi.string().required().valid('multiple', 'single')
                }).required(),

            ).required().min(1),
            description: Joi.string().required().min(10)
        }),

        update: Joi.object<QuizBody>({
            name: Joi.string(),
            author: Joi.string().min(3),
            questions: Joi.array().items(
                Joi.object<Question>({
                    text: Joi.string().min(3).required(),
                    options: Joi.array().items(
                        Joi.object<Option>({
                            text: Joi.string().required().min(1).required(),
                            correct: Joi.boolean().required()
                        })).required().min(1),
                    category: Joi.string().required().valid('multiple', 'single')
                }).required()
            ),
            description: Joi.string()
        }),
    }
}
