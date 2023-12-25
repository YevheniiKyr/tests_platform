import React, {useState} from 'react';
import {IoMdAddCircleOutline} from "react-icons/io";
import styles from '../styles/quizCreationPage.module.css'
import {useAppDispatch} from "../store/store";
import { addQuestion} from "../store/slices/newQuizSlice";

const AddQuestion = () => {
    type QuestionType = "multiple" | "single"
    const typesOfQuestion: QuestionType[] = ["multiple", "single"];
    const [type, setType] = useState<QuestionType>("single")

    const dispatch = useAppDispatch()

    function handleTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setType(e.target.value as QuestionType)
    }

    function handleAddNewQuestion() {
        dispatch(
            addQuestion({
                text: 'question',
                options: []
            })
        )
    }

    return (
        <>
            <h2 className={styles.add_question_header}> add new question</h2>
            <div className={styles.add_question_container}>
                <label
                    className={styles.question_type_label}
                    htmlFor="questionType"
                >
                    Question Type:
                </label>
                <select
                    id="questionType"
                    onChange={e => handleTypeChange(e)}
                    className={styles.question_type_select}
                >
                    {typesOfQuestion.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
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