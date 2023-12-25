import {configureStore} from "@reduxjs/toolkit";
// import {QuizSlice} from "./quizSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {newQuizSlice} from "./slices/newQuizSlice";
import {quizApi} from "./api/quiz/quizApi";

export const store = configureStore({
    reducer: {
        // quizzes: QuizSlice.reducer,
        newQuiz: newQuizSlice.reducer,
        [quizApi.reducerPath]: quizApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(quizApi.middleware)
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector