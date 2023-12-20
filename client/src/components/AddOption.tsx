import React from 'react';
import {IoMdAddCircleOutline} from "react-icons/io";
import styles from "../styles/quizCreationPage.module.css";
import {useAppDispatch} from "../store/store";
import {addOption} from "../store/newQuizSlice";

interface AddOptionProps {
    questionId: number;
}

const AddOption: React.FC<AddOptionProps> = ({questionId}) => {
    const dispatch = useAppDispatch()

    function handleAddNewOption() {
        dispatch(
            addOption({
                text: "Option",
                questionId: questionId
            })
        )
    }

    return (
        <div className={styles.add_option_container}>
            <h2>Add option</h2>
            <button
                className={styles.add_option_button}
                type="button"
                onClick={handleAddNewOption}
            >
                <IoMdAddCircleOutline/>
            </button>
        </div>
    );
};

export default AddOption;