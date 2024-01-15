import React, {useState} from 'react';
import {IoMdAddCircleOutline} from "react-icons/io";
import styles from '../../styles/quizCreationPage.module.css'
import {useAppDispatch} from "../../store/store";
import {addQuestion} from "../../store/slices/newQuizSlice";
import {QuestionCategory} from "../../types/newQuizTypes";
import SelectQuestionCategory from "./SelectQuestionCategory";

const AddQuestion = () => {
    const [type, setType] = useState<QuestionCategory>("single")

    const dispatch = useAppDispatch()

    function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setType(e.target.value as QuestionCategory)
    }

    function handleAddNewQuestion() {
        dispatch(
            addQuestion({
                text: 'question',
                options: [],
                category: type
            })
        )
    }

    return (
        <>
            <h2 className={styles.add_question_header}> Add new question</h2>
            <div className={styles.add_question_container}>
                <label
                    className={styles.question_type_label}
                    htmlFor="questionType"
                >
                    Question Type:
                </label>
                <SelectQuestionCategory
                    handleCategoryChange={handleCategoryChange}
                />
                <button
                    className={styles.add_question_button}
                    type="button"
                    onClick={handleAddNewQuestion}
                >
                    <IoMdAddCircleOutline/>
                </button>
            </div>
        </>
    );
};

export default AddQuestion;