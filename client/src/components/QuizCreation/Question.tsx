import React, {FC, useState} from 'react';
import {Category, Option} from '../../types/types'
import styles from '../../styles/quizCreationPage.module.css'
import {MdDelete} from "react-icons/md";
import AddOption from "./AddOption";
import {useAppDispatch} from "../../store/store";
import {deleteQuestion, editQuestion, setQuestionCategory} from "../../store/slices/newQuizSlice";
import {FaSave} from "react-icons/fa";
import Options from "./Options";
import {QuestionCategory} from "../../types/newQuizTypes";
import SelectQuestionCategory from "./SelectQuestionCategory";

interface QuestionProps {
    options: Option[];
    text: string;
    multiple: boolean;
    category: Category;
    id: number;
}

const Question: FC<QuestionProps> = ({options, text, id, category}) => {

    const [currentQuestion, setCurrentQuestion] = useState(text)

    const dispatch = useAppDispatch()

    function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        // setType(e.target.value as QuestionCategory)
        dispatch(
            setQuestionCategory({
                id: id,
                category: e.target.value as QuestionCategory
            })
        )
    }

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
                text: currentQuestion,
                category: category
            })
        )
    }

    return (
        <div className={styles.question_container}>
            <SelectQuestionCategory
                handleCategoryChange={handleCategoryChange}
            />
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
            <Options
                options = {options}
                questionId = {id}
            />
            <AddOption questionId={id}/>
        </div>
    );
};

export default Question;