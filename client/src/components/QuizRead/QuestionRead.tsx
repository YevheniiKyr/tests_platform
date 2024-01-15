import React, {FC} from 'react';

import styles from '../../styles/quizPage.module.css'
import OptionsRead from "./OptionsRead";
import {OptionFromServer} from "../../types/serverTypes";
import {Category} from "../../types/types";

interface QuestionProps {
    options: OptionFromServer[];
    text: string;
    multiple: boolean;
    category: Category;
    id: string
}

const QuestionRead: FC<QuestionProps> = ({id, options, text, category}) => {
    return (
        <>
            <div className={styles.question}>{text}</div>
            <OptionsRead
                options={options}
                question_id={id}/>
        </>
    );
};

export default QuestionRead;