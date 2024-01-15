import React, {useEffect, useState} from 'react';
import QuizInfoRead from "./QuizRead/QuizInfoRead";
import styles from "../styles/quizPage.module.css";
import QuestionsRead from "./QuizRead/QuestionsRead";
import {useAppDispatch, useAppSelector} from "../store/store";
import {initQuestions, reset} from "../store/slices/quizAnswerSlice";
import {useSendAnswerMutation} from "../store/api/answerApi";
import {QuizFromServer, Result} from "../types/serverTypes";
import {useLocation, useNavigate} from "react-router-dom";

interface QuizProps {
    quiz: QuizFromServer
}

const Quiz: React.FC<QuizProps> = ({quiz}) => {
    const dispatch = useAppDispatch()
    const [sendAnswer] = useSendAnswerMutation()
    const answer = useAppSelector(state => state.quizAnswer)
    const [resultsVisible, setResultsVisible] = useState(false)
    const [result, setResult] = useState<Result | null>()
    const [nextTry, setNextTry] = useState(false)

    useEffect(() => {
        const question_ids = quiz.questions.map(q => q._id)

        dispatch(
            initQuestions({
                ids: question_ids,
                quizId: quiz._id
            })
        )
    }, [nextTry])

    function handleSend() {
        sendAnswer(answer).then(res => {
            dispatch(reset({}))
            setNextTry(!nextTry)
            // @ts-ignore
            setResult(res.data)
            // @ts-ignore
            console.log(res.data)
            setResultsVisible(true)
            console.log(res)
            // @ts-ignore
        })
    }

    return (
        <div className={styles.page_container}>
            <div className={styles.quiz_container}>
                <QuizInfoRead
                    name={quiz.name}
                    author={quiz.author || 'author'}
                    description={quiz.description || 'description'}
                />
                <QuestionsRead
                    questions={quiz.questions}/>
                <div className={styles.send_quiz_button_container}>
                    <button
                        className={styles.send_quiz_button}
                        onClick={handleSend}>
                        Send
                    </button>
                </div>
            </div>
            {
                result &&
                <div className={styles.results_container}>
                    <h2 className={styles.results_header}> Results </h2>
                    <p className = {styles.result}> {result.correct >= 0? result.correct : 0}/{result.total} </p>
                </div>
            }
        </div>
    );
};

export default Quiz