import React from 'react';
import {useGetAllQuizzesQuery, useGetQuizQuery} from "../store/api/quiz/quizApi";

const AllQuizesPage = () => {

    const {data: allQuizzes} = useGetAllQuizzesQuery(undefined);

    return (
        <div>
            {
                allQuizzes ?
                    <p>{allQuizzes.length}</p>
                    :
                    <p>I DK</p>
            }
        </div>
    );
};

export default AllQuizesPage;