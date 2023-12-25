import React from 'react';

const QuizSlice = () => {
    return (
        <div>
            
        </div>
    );
};

export default QuizSlice;
//
//
//
// export interface Quiz {
//     id: number;
//     description: string;
//     author: string | null;
//     image: string | null;
//     questions: Question[]
// }
//
//
//
// interface QuizzesState {
//     quizzes: Quiz[];
//     freeQuizId: number;
// }
//
// interface DeleteQuestion {
//     quizId: number;
//     id: number;
// }
// const initialState: QuizzesState = {
//     quizzes: [],
//     freeQuizId: 0,
//     freeQuestionId: 0
// }
//
//
// export const QuizSlice = createSlice({
//     name: "quizzes",
//     initialState,
//     reducers: {
//         // addQuiz: (state, action: PayloadAction<newQuiz>) => {
//         //     state.quizzes.push({
//         //         id: state.freeQuizId,
//         //         ...action.payload
//         //     })
//         //     state.freeQuizId++;
//         // },
//
//         addQuestion: (state, action: PayloadAction<newQuestion>) => {
//             let quiz = state.quizzes.find(quiz => quiz.id === action.payload.quizId);
//             if(quiz) {
//                 quiz.questions.push({
//                     id: state.freeQuestionId,
//                     ...action.payload
//                 })
//                 state.freeQuestionId++;
//
//             }
//         },
//
//         deleteQuestion: (state, action: PayloadAction<DeleteQuestion>) => {
//             let quiz = state.quizzes.find(quiz => quiz.id === action.payload.quizId);
//             if(quiz) {
//                 quiz.questions = quiz.questions.filter(question => question.id !== action.payload.id);
//             }
//         },
//
//         updateQuestion: (state, action: PayloadAction<DeleteQuestion>) => {
//             let quiz = state.quizzes.find(quiz => quiz.id === action.payload.quizId);
//             if(quiz) {
//                 quiz.questions = quiz.questions.filter(question => question.id !== action.payload.id);
//             }
//         },
//     }
// })
//
// export default QuizSlice.reducer;
// export const {addQuestion, updateQuestion, deleteQuestion} = QuizSlice.actions