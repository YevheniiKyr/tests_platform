import {QuizBody} from "../../types/QuizTypes";
import {QuizModel} from "../../models/Quizzes";
import NotFoundException from "../../Exceptions/NotFoundException";

class QuizService {
    async addQuiz(quizBody: QuizBody) {

        const newQuiz = await QuizModel.create({
            name: 'quiz',
            description: quizBody.description,
            questions: quizBody.questions,
            author: quizBody.author
        })

        return newQuiz
    }

    async findQuiz(quizId: string) {
        const quiz = await QuizModel.findById(quizId);
        if(!quiz) throw new NotFoundException(`quiz with id ${quizId} does not exist`)
        return quiz;
    }

    async findAllQuizzes() {
        const quizzes = await QuizModel.find();
        return quizzes;
    }

    async editQuiz(quizId: string, quizBody: QuizBody) {
        const updatedQuiz = await QuizModel.findByIdAndUpdate(quizId, quizBody, {new: true});
        return updatedQuiz;
    }

    async removeQuiz(quizId: string) {
        const deletedQuiz = await QuizModel.findByIdAndDelete(quizId);
        if(!deletedQuiz) {
            throw new NotFoundException(`quiz with id ${quizId} does not exist`)
        }
        return deletedQuiz;
    }
}

export default new QuizService()
