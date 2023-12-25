import {
    DeleteOption, DeleteQuestion,
    EditOption, EditQuestion,
    NewOption,
    NewQuestion,
    NewQuiz,
} from '../../types/newQuizTypes';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: NewQuiz = {
    description: null,
    author: null,
    image: null,
    questions: [],
    freeQuestionId: 7,
    freeOptionId: 1000
}


export const newQuizSlice = createSlice({
    name: "newQuiz",
    initialState,
    reducers: {
        addQuestion: (state, action: PayloadAction<NewQuestion>) => {
            state.questions.push({
                id: state.freeQuestionId,
                ...action.payload
            })
            state.freeQuestionId += 2

        },

        deleteQuestion: (state, action: PayloadAction<DeleteQuestion>) => {
            state.questions = state.questions.filter(question => question.id !== action.payload.id)
        },

        editQuestion: (state, action: PayloadAction<EditQuestion>) => {
            const question = state.questions.find(question => question.id === action.payload.id)
            if (question) {
                question.text = action.payload.text
            }
        },
        addOption: (state, action: PayloadAction<NewOption>) => {
            const question = state.questions.find(question => question.id === action.payload.questionId)

            if (question) {
                question.options.push({
                    id: state.freeOptionId,
                    text: action.payload.text
                })
            }
            state.freeOptionId += 2;

        },

        deleteOption: (state, action: PayloadAction<DeleteOption>) => {
            const question = state.questions.find(question => question.id === action.payload.questionId)

            if (question) {
                question.options = question.options.filter(option => option.id !== action.payload.id)
            }
        },

        editOption: (state, action: PayloadAction<EditOption>) => {
            const question = state.questions.find(question => question.id === action.payload.questionId)

            if (question) {
                const option = question.options.find(option => option.id === action.payload.id)
                if (option) {
                    option.text = action.payload.text
                }
            }
        }

    }
})
export default newQuizSlice.reducer;
export const {addQuestion, deleteQuestion, editQuestion, addOption, editOption, deleteOption} = newQuizSlice.actions