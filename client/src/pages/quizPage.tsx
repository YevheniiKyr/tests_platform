import React from 'react';
import {useGetQuizQuery} from "../store/api/quizApi";
import {useNavigate, useParams} from "react-router-dom";
import Quiz from '../components/Quiz'
const QuizPage: React.FC = () => {
    const {id} = useParams()
    const {data: quiz, isFetching, isError} = useGetQuizQuery(id)
    if (isFetching) return <div> LOADING </div>
    if (isError) return <div> ERROR </div>
    if (quiz) { // @ts-ignore
        return <Quiz quiz={quiz}/>
    }
    return null;
};

export default QuizPage;