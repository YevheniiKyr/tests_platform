import React, {FC} from 'react';
import styles from "../../styles/allQuizzesPage.module.css";
import {useNavigate} from "react-router-dom";
import {QUIZ_ROUTE} from "../../utils/constRoutes";

interface QuizProps {
    description: string,
    name: string,
    author: string,
    id: string
}

const QuizItem: FC<QuizProps> = ({description, name, author, id}) => {
    const navigate = useNavigate()
    return (
        <div
            className={styles.item}
            onClick={() => navigate(QUIZ_ROUTE + '/' + id)}
        >
            <div className={styles.name}>{name}</div>
            <div className={styles.fields}>
                <h3>Made by </h3>
                <p>{author}</p>

                <h3>Description: </h3>
                <p> {description}</p>
            </div>

        </div>
    );
};

export default QuizItem;