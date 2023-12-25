import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Question, Quiz, QuizBody} from '../../../types/types'


export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (builder) => ({
        getAllQuizzes: builder.query<Quiz[], undefined>({
            query: () => 'quizzes',
        }),
        getQuiz: builder.query<Quiz, any>({
            query: ( id) => `quizzes/${id}`,
        }),
        createQuiz: builder.mutation<Quiz, QuizBody>({
            query: quiz =>({
                url: 'quizzes',
                method: 'POST',
                body: quiz
            })
        })
        // deleteQuiz: builder.mutation({
        //     mutation: () => 'quizzes/:id',
        // }),
        // updateQuiz: builder.mutation({
        //     mutation: () => 'quizzes/:id',
        // }),
    })
})

export const {useGetAllQuizzesQuery, useGetQuizQuery, useCreateQuizMutation} = quizApi