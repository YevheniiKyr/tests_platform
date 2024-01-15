import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {FinalAnswer} from "../../types/quizAnswerTypes";
import {Result} from "../../types/serverTypes";

export const answerApi = createApi({
    reducerPath: 'answerApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (builder) => ({
        sendAnswer: builder.mutation<Result, FinalAnswer>({
            query: ({ quizId, ...answer }) => ({
                url: `quizzes/${quizId}/answers`,
                method: 'POST',
                body: answer,
            }),
        })
    })
})

export const {useSendAnswerMutation} = answerApi