import React, {FC, useState} from 'react';
import styles from '../styles/quizCreationPage.module.css'
import {deleteOption, editOption} from "../store/newQuizSlice";
import {useAppDispatch} from "../store/store";
import { RiCloseFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

interface OptionProps {
    option: string;
    questionId: number;
    id: number;
}

const OptionElement: FC<OptionProps> = ({id, option, questionId}) => {

    const [currentOption, setCurrentOption] = useState(option)

    const dispatch = useAppDispatch()

    function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentOption(e.target.value)
    }

    function handleDelete() {
        dispatch(
            deleteOption({
                questionId: questionId,
                id: id
            })
        )
    }

    function handleSave() {
        dispatch(
            editOption({
                questionId: questionId,
                id: id,
                text: currentOption
            })
        )
    }

    return (
        <div className={styles.option_with_actions}>
            <div className={styles.option}>
                <input
                    className={styles.custom_input}
                    value={currentOption}
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
                <TiTick />
            </button>
        </div>
    );
};

export default OptionElement;