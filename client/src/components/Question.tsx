import React, {FC, useState} from 'react';
import {Option} from '../types'
import OptionElement from "./OptionElement";
import styles from '../styles/quizCreationPage.module.css'
import {MdDelete} from "react-icons/md";
import AddOption from "./AddOption";
import {useAppDispatch} from "../store/store";
import {deleteQuestion, editQuestion} from "../store/newQuizSlice";
import {FaSave} from "react-icons/fa";

interface QuestionProps {
    options: Option[];
    question: string;
    multiple: boolean
    id: number;
}


const Question: FC<QuestionProps> = ({options, question, id}) => {

    const [currentQuestion, setCurrentQuestion] = useState(question)

    const dispatch = useAppDispatch()

    function handleQuestionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setCurrentQuestion(e.target.value)
    }

    function handleDelete() {
            dispatch(
            deleteQuestion({
                id: id,
            })
        )
    }

    function handleSave() {
        dispatch(
            editQuestion({
                id: id,
                text: currentQuestion
            })
        )
    }

    return (
        <div className={styles.question_container}>
            <div className={styles.question_with_actions}>
                <textarea
                    className={styles.question_area}
                    value={currentQuestion}
                    onChange={e => handleQuestionChange(e)}
                />
                <button
                    type="button"
                    className={styles.delete_question_button}
                    onClick={handleDelete}
                >
                    <MdDelete/>
                </button>
                <button
                    type="button"
                    className={styles.save_question_button}
                    onClick={handleSave}
                >
                    <FaSave/>
                </button>
            </div>
            {
                options.map(option =>
                    <OptionElement
                        key={option.id}
                        id={option.id}
                        questionId={id}
                        option={option.text}
                    />
                )
            }
            <AddOption questionId={id}/>
        </div>
    );
};

export default Question;