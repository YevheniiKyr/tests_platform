import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewQuestion} from "../../types/newQuizTypes";
import {strict} from "assert";
import {Answer, FinalAnswer, QuizInit} from "../../types/quizAnswerTypes";


const initialState: FinalAnswer = {
    answers: [],
    quizId: ''
}
export const quizAnswerSlice = createSlice({
    name: "answerQuiz",
    initialState,
    reducers: {
        initQuestions: (state, action: PayloadAction<QuizInit>) => {
            state.answers = []
            state.quizId = ''
            action.payload.ids.map(
                id => {
                    let answer = state.answers.find(q => q.questionId === id)
                    if (answer) return
                    state.answers.push({
                        questionId: id,
                        correctOptionsId: []
                    })
                })

            state.quizId = action.payload.quizId
        },

        reverseOption: (state, action: PayloadAction<Answer>) => {
            const questionId = action.payload.questionId
            const optionId = action.payload.optionId
            const answer = state.answers.find(answer => answer.questionId === questionId)
            if (answer) {
                if (answer.correctOptionsId.includes(optionId)) {
                    answer.correctOptionsId = answer.correctOptionsId.filter(id => id !== optionId)
                } else answer.correctOptionsId.push(optionId)
            }
            else console.log("QUESTION DOES NOT EXIST")
        },

        reset: (state, action) => {
            state.answers = []
            state.quizId = ''
        }
    }
})

export default quizAnswerSlice.reducer
export const {
    initQuestions,
    reverseOption,
    reset
} = quizAnswerSlice.actions