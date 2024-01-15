import React, {FC} from 'react';
import styles from "../../styles/quizPage.module.css";

interface QuizInfoReadProps {
    description: string,
    name: string,
    author: string
}

const QuizInfoRead: FC<QuizInfoReadProps> = (quizInfo) => {
    return (
        <div className={styles.quiz_info_container}>
            <div className={styles.field}>
                <label htmlFor='name'
                       className={styles.field_label}
                > Quiz Name: </label>
                <p className = {styles.field_value}
                >
                    {quizInfo.name}
                </p>
            </div>

            <div className={styles.field}>
                <label
                    htmlFor='description'
                    className={styles.field_label}
                > Quiz Description: </label>
                <p className = {styles.field_value}
                >
                    {quizInfo.description}
                </p>
            </div>

            <div className={styles.field}>
                <label
                    htmlFor='author'
                    className={styles.field_label}
                >
                    Quiz Author:
                </label>
                <p className = {styles.field_value}
                >
                    {quizInfo.author}
                </p>
            </div>

        </div>
    )
}

export default QuizInfoRead;