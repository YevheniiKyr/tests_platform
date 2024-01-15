import React from 'react';
import {useGetAllQuizzesQuery} from "../store/api/quizApi";
import Quizzes from "../components/Quizzes/Quizzes";

const AllQuizzesPage = () => {

    const {data: quizzes = [], isFetching, isError} = useGetAllQuizzesQuery(undefined);

        // @ts-ignore
    if (isFetching) return <div> loading </div>
    if (isError) return <div> error </div>
    if (quizzes) { // @ts-ignore
        // @ts-ignore
        return <Quizzes quizzes={quizzes}/>
    }
    return null;
}


export default AllQuizzesPage;