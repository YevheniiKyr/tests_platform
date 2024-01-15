import React, {FC} from 'react';
import OptionElement from "./OptionElement";
import {Option} from '../../types/types'
interface OptionsProps {
    options: Option[],
    questionId: number
}
const Options: FC<OptionsProps> = ({options, questionId}) => {
    return (
        <div>
            {
                options.map(option =>
                    <OptionElement
                        key={option.id}
                        questionId={questionId}
                        option={{
                            text: option.text,
                            id: option.id,
                            correct: option.correct
                        }}
                    />
                )
            }
        </div>
    );
};

export default Options;