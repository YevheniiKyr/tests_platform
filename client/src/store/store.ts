import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {newQuizSlice} from "./slices/newQuizSlice";
import {quizApi} from "./api/quizApi";
import {quizAnswerSlice} from "./slices/quizAnswerSlice";
import {answerApi} from "./api/answerApi";

export const store = configureStore({
    reducer: {
        newQuiz: newQuizSlice.reducer,
        quizAnswer: quizAnswerSlice.reducer,
        [quizApi.reducerPath]: quizApi.reducer,
        [answerApi.reducerPath]: answerApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(quizApi.middleware).concat(answerApi.middleware)
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector