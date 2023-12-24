import {QuizBody} from "./types/ApiTypes";
import {QuizModel} from "./models/Quizzes";
import NotFoundException from "./Exceptions/NotFoundException";

class QuizService {
    async addQuiz(quizBody: QuizBody) {
        console.log("WE ARE IN addQuiz")

        const newQuiz = await QuizModel.create({...quizBody})
        console.log("WE ADDED QUIZ")

        console.log("-".repeat(100), newQuiz)
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
