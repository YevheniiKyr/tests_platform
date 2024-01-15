import {ALL_QUIZZES_ROUTE, MAIN_ROUTE, QUIZ_CREATION_ROUTE, QUIZ_ROUTE} from './utils/constRoutes'
import quizPage from "./pages/quizPage";
import allQuizesPage from "./pages/allQuizzesPage";
import mainPage from "./pages/mainPage";
import quizCreationPage from "./pages/quizCreationPage";
import React from 'react';


// type Path = typeof QUIZ_ROUTE |  typeof ALL_QUIZZES_ROUTE |  typeof MAIN_ROUTE |  typeof QUIZ_CREATION_ROUTE

type Route = {
    path: string
    Component: React.FC
}

export const publicRoutes: Route[] = [
    {
        path: QUIZ_ROUTE + '/:id',
        Component: quizPage
    },
    {
        path: ALL_QUIZZES_ROUTE,
        Component: allQuizesPage
    },
    {
        path: MAIN_ROUTE,
        Component: mainPage
    },
    {
        path: QUIZ_CREATION_ROUTE,
        Component: quizCreationPage
    },
]