import React, {FC, useState} from 'react';
import styles from '../../styles/quizPage.module.css'
import {useAppDispatch} from "../../store/store";
import {reverseOption} from "../../store/slices/quizAnswerSlice";
import {OptionFromServer} from "../../types/serverTypes";

interface OptionReadProps {
    option: OptionFromServer,
    question_id: string
}
const OptionRead: FC<OptionReadProps> = ({question_id, option}) => {
    const [selected, setSelected] = useState(false)
    const dispatch = useAppDispatch()

    function handleClick() {
        dispatch(
            reverseOption({
                questionId: question_id,
                optionId: option._id
            })
        )
        setSelected(!selected)
    }

    return (
        <div
            className={selected? `${styles.option} ${styles.selected}` : styles.option }
            onClick={handleClick}
        >
            {option.text}
        </div>
    );
};

export default OptionRead;