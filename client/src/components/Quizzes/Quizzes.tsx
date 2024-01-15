import React, {FC} from 'react';
import QuizItem from "./QuizItem";
import styles from '../../styles/allQuizzesPage.module.css'
import {QuizzesFromServer} from "../../types/serverTypes";

interface QuizzesProps {
    quizzes: QuizzesFromServer;
}

const Quizzes: FC<QuizzesProps> = ({quizzes}) => {
    return (
        <div className={styles.wrapper}>
            {
                quizzes.map((quiz) => (
                    <QuizItem
                        key={quiz._id}
                        id={quiz._id}
                        description={quiz.description || 'no description'}
                        name={quiz.name || 'quiz'}
                        author={quiz.author || 'anonym'}
                    />
                ))
            }
        </div>
    );
};

export default Quizzes;