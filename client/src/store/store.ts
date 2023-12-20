import {configureStore} from "@reduxjs/toolkit";
// import {QuizSlice} from "./quizSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {newQuizSlice} from "./newQuizSlice";

export const store = configureStore({
    reducer: {
        // quizzes: QuizSlice.reducer,
        newQuiz: newQuizSlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector