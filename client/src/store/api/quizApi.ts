import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {QuizFromServer, QuizzesFromServer} from "../../types/serverTypes";


export const quizApi = createApi({
    reducerPath: 'quizApi',
    tagTypes: ['QUIZZES'],
    baseQuery: fetchBaseQuery(
        {baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (builder) => ({
        getAllQuizzes: builder.query<QuizzesFromServer, undefined>({
            query: () => 'quizzes',
            providesTags: ['QUIZZES']
        }),
        getQuiz: builder.query<QuizFromServer, any>({
            query: ( id) => `quizzes/${id}`,
        }),
        createQuiz: builder.mutation<any, any>({
            query: quiz =>({
                url: 'quizzes',
                method: 'POST',
                body: quiz,
            }),
            invalidatesTags: ['QUIZZES']
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