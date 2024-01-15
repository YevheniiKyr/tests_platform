import React, {useEffect} from 'react';
import styles from '../styles/quizCreationPage.module.css'
import AddQuestion from "../components/QuizCreation/AddQuestion";
import {useAppSelector} from "../store/store";
import {useCreateQuizMutation} from "../store/api/quizApi";
import {Question as QuestionType} from '../types/types'
import Questions from "../components/QuizCreation/Questions";
import QuizInfo from "../components/QuizCreation/QuizInfo";
import {OptionToServer, QuestionToServer, QuizBody} from "../types/serverTypes";


const QuizCreationPage = () => {

    const questions = useAppSelector(state => state.newQuiz.questions)
    const description = useAppSelector(state => state.newQuiz.description)
    const name = useAppSelector(state => state.newQuiz.name)
    const author = useAppSelector(state => state.newQuiz.author)


    const [createQuiz] = useCreateQuizMutation()

    useEffect(() => {

    }, [])

    function mapToQuestionWithNoIdInOption(questions: QuestionType[]): QuestionToServer[] {
        const questionsToServer: QuestionToServer[] = questions.map(q => {
            const optionsOnServer: OptionToServer[] = q.options.map(option => {
                return {
                    text: option.text,
                    correct: option.correct
                };
            });

            return {
                text: q.text,
                options: optionsOnServer,
                category: q.category,
            };
        });

        return questionsToServer;
    }

    function handleQuizCreation(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const newQuiz: QuizBody = {
            name: name,
            description: description,
            questions: mapToQuestionWithNoIdInOption(questions),
            author: author,
        }
        createQuiz(newQuiz)
    }

    return (
        <div className={styles.page_container}>
            <h1 className={styles.create_quiz_header}> NEW QUIZ </h1>
            <div className={styles.creation_container}>
                <QuizInfo
                    description={description}
                    name={name}
                    author={author}
                />
                <Questions questions={questions}/>
                <AddQuestion/>
                <div className={styles.create_button_container}>
                    <button
                        type="submit"
                        className={styles.add_quiz_button}
                        onClick={e => handleQuizCreation(e)}
                    >
                        CREATE QUIZ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizCreationPage;