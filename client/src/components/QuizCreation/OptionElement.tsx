import React, {FC, useState} from 'react';
import styles from '../../styles/quizCreationPage.module.css'
import {deleteOption, editOption} from "../../store/slices/newQuizSlice";
import {useAppDispatch} from "../../store/store";
import { RiCloseFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import {Option} from '../../types/types'
import {FaSave} from "react-icons/fa";
interface OptionProps {
    option: Option;
    questionId: number;
}

const OptionElement: FC<OptionProps> = ({option, questionId}) => {

    const [text, setText] = useState(option.text)

    const dispatch = useAppDispatch()

    function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }

    function handleDelete() {
        dispatch(
            deleteOption({
                questionId: questionId,
                id: option.id
            })
        )
    }

    function handleSave() {
        dispatch(
            editOption({
                questionId: questionId,
                id: option.id,
                text: text,
                correct: option.correct
            })
        )
    }

    function handleChangeCorrect() {
        dispatch(
            editOption({
                questionId: questionId,
                id: option.id,
                text: text,
                correct: !option.correct
            })
        )
    }

    return (
        <div className={styles.option_with_actions}>
            <div className={styles.option} style = {{ backgroundColor: option.correct? "lightgreen" : "#ab66a1" }}>
                <input
                    className={styles.custom_input}
                    value={text}
                    onChange={e => handleOptionChange(e)}/>
            </div>
            <button
                type="button"
                className={styles.delete_option_button}
                onClick={handleDelete}
            >
                <RiCloseFill/>
            </button>
            <button
                type="button"
                className={styles.save_option_button}
                onClick={handleSave}
            >
                <FaSave />
            </button>
            <button
                type="button"
                className={styles.save_option_button}
                onClick={handleChangeCorrect}
            >
                <TiTick />
            </button>
        </div>
    );
};

export default OptionElement;