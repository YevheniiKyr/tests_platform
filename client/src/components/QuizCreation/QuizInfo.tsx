import React, {FC, useState} from 'react';
import {useAppDispatch} from "../../store/store";
import {editInfo} from "../../store/slices/newQuizSlice";
import styles from '../../styles/quizCreationPage.module.css'

interface QuizInfoProps {
    description: string,
    name: string,
    author: string
}

const QuizInfo: FC<QuizInfoProps> = (quizInfoProps) => {
    const dispatch = useAppDispatch()
    const [quizInfo, setQuizInfo] = useState<QuizInfoProps>(quizInfoProps);

    const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setQuizInfo((prevInfo) => ({...prevInfo, [name]: value}));
    };

    function handleSaveInfo() {
        console.log(quizInfo.description)
        dispatch(
            editInfo({
                description: quizInfo.description,
                name: quizInfo.name,
                author: quizInfo.author
            })
        )
    }

    return (
        <div className = {styles.quiz_info_container}>
            <h2> Add information about quiz </h2>

            <div className={styles.field}>
                <label htmlFor='name'
                       className={styles.field_label}
                > Quiz Name </label>
                <input
                    className={styles.field_input}
                    name="name"
                    id="name"
                    type='text'
                    value={quizInfo.name}
                    onChange={handleTextFieldChange}
                />
            </div>

            <div className={styles.field}>
                <label
                    htmlFor='description'
                    className={styles.field_label}
                > Quiz Description </label>
                <input
                    className={styles.field_input}
                    name="description"
                    id="description"
                    value={quizInfo.description}
                    onChange={handleTextFieldChange}
                />
            </div>

            <div className={styles.field}>
                <label
                    htmlFor='author'
                    className={styles.field_label}
                >
                    Quiz Author
                </label>
                <input
                    className={styles.field_input}
                    name="author"
                    id="author"
                    value={quizInfo.author}
                    onChange={handleTextFieldChange}
                />
            </div>

            <button
                className = {styles.save_quiz_info_button}
                onClick={handleSaveInfo}>
                Save
            </button>
        </div>
    );
};

export default QuizInfo;