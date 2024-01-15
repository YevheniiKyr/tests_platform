import React, {FC} from 'react';
import styles from "../../styles/quizCreationPage.module.css";
import {QuestionCategory} from "../../types/newQuizTypes";

interface SelectTypeProps {
    handleCategoryChange: Function;
}
const SelectQuestionCategory: FC<SelectTypeProps> = ({handleCategoryChange}) => {
    const typesOfQuestion: QuestionCategory[] = ["multiple", "single"];

    return (
        <select
            id="questionType"
            onChange={e => handleCategoryChange(e)}
            className={styles.question_type_select}
        >
            {typesOfQuestion.map((type) => (
                <option key={type} value={type}>
                    {type}
                </option>
            ))}
        </select>
    );
};

export default SelectQuestionCategory;