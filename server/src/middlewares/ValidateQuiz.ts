import Joi, {ObjectSchema, string} from 'joi';
import {NextFunction, Request, Response} from 'express';
import {QuizBody} from "../types/ApiTypes";
import {Category, Options, Question} from "../types/QuizTypes";
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
            questions: Joi.array().items(
                Joi.object<Question>({
                    text: Joi.string().min(3),
                    options: Joi.object<Options>({
                        correct_options: Joi.array().items(
                            Joi.string()
                        ),
                        other_options: Joi.array().items(
                            Joi.string()
                        ),
                    }),
                }).required()
            ).required().min(1),
            description: Joi.string().required().min(10)
        }),

        update: Joi.object<QuizBody>({
            name: Joi.string(),
            questions: Joi.array().items(
                Joi.object<Question>({
                    text: Joi.string().min(3),
                    options: Joi.object<Options>({
                        correct_options: Joi.array().items(
                            Joi.string()
                        ),
                        other_options: Joi.array().items(
                            Joi.string()
                        ),
                    }),
                }).required()
            ),
            description: Joi.string()
        }),
    }
}
