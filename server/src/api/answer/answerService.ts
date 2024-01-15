import {OneQuestionAnswer, QuizAnswer, Result} from "../../types/AnswerTypes";
import {QuizModel} from "../../models/Quizzes";
import NotFoundException from "../../Exceptions/NotFoundException";
import {tryCatch} from "../../utils/tryCatch";

class AnswerService {
    async checkAnswers(quizAnswer: QuizAnswer, quizId) {
        const quiz = await QuizModel.findById(quizId);
        if (!quiz) throw new NotFoundException(`quiz with id ${quizId} does not exist`);
        let total = 0;
        let correct = 0;
        quizAnswer.answers.map(answer => {
                let questionInfo: { total: number, correct: number } = this.countRightAnswersForOneQuestion(answer, quiz)
                total += questionInfo.total
                correct += questionInfo.correct
            }
        )
        return {total, correct}
    }

    countRightAnswersForOneQuestion(oneQuestionAnswer: OneQuestionAnswer, quiz) {
        const question = quiz.questions.find(q => q._id == oneQuestionAnswer.questionId)
        // if (!question) throw new NotFoundException(`question with id ${oneQuestionAnswer.question_id} does not exist`);
        if (!question) {
            console.log('Question with id ' + oneQuestionAnswer.questionId + ' not exists')
            return {total: 0, correct: 0}
        }
        let rightAnswersCount = 0
        let totalAnswersCount = 0

        question.options.map(option => {
            if (option.correct)
                totalAnswersCount++;
        })

        oneQuestionAnswer.correctOptionsId.map(optionId => {
            let option = question.options.find(option => option._id == optionId)
            if(!option) return
            if(option.correct) rightAnswersCount++;
            if(!option.correct) rightAnswersCount--;
        })
        return {total: totalAnswersCount, correct: rightAnswersCount}
    }
}

export default new AnswerService()