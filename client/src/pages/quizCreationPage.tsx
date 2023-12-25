import React, {useEffect} from 'react';
import styles from '../styles/quizCreationPage.module.css'
import AddQuestion from "../components/AddQuestion";
import Question from "../components/Question";
import {useAppSelector} from "../store/store";
import {useCreateQuizMutation} from "../store/api/quiz/quizApi";
import {QuizBody} from '../types/types'
const QuizCreationPage = () => {

    const questions = useAppSelector(state => state.newQuiz.questions)
    const [createQuiz] = useCreateQuizMutation()

    useEffect(() => {

    }, [])

    function handleQuizCreation(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const newQuiz: QuizBody = {
            name: 'newQuiz',
            description: 'desc',
            questions: questions
        }
        createQuiz(newQuiz)
    }

    return (
        <div className={styles.page_container}>
            <h1 className={styles.create_quiz_header}> NEW QUIZ </h1>
            <div className={styles.creation_container}>
                    {
                        questions.map(
                            question =>
                                <Question
                                    key={question.id}
                                    options={question.options}
                                    question={question.text}
                                    id={question.id}
                                    multiple={false}
                                />
                        )
                    }

                    <AddQuestion/>
                    <button
                        type="submit"
                        className={styles.add_quiz_button}
                        onClick={e => handleQuizCreation(e)}
                    >
                        CREATE QUIZ
                    </button>
            </div>
        </div>
    );
};

export default QuizCreationPage;