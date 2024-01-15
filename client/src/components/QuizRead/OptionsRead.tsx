import React, {FC} from 'react';
import OptionRead from "./OptionRead";
import {OptionFromServer} from "../../types/serverTypes";

interface OptionsReadProps {
    options: OptionFromServer[],
    question_id: string

}
const OptionsRead: FC<OptionsReadProps> = ({question_id, options}) => {

    return (
        <>
            {
                options.map(option => (
                    <OptionRead
                        question_id={question_id}
                        key = {option._id}
                        option = {option}
                    />
                ))
            }
        </>
    );
};

export default OptionsRead;