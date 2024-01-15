import React, {FC} from 'react';
import Question from "./Question";
import {Question as QuestionType} from '../../types/types'

interface QuestionProps {
    questions: QuestionType[]
}
const Questions: FC<QuestionProps> = ({questions}) => {
    return (
        <>
            {
                questions.map(
                    question =>
                        <Question
                            key={question.id}
                            options={question.options}
                            text={question.text}
                            category = {question.category}
                            id={question.id}
                            multiple={false}
                        />
                )
            }
        </>
    );
};

export default Questions;