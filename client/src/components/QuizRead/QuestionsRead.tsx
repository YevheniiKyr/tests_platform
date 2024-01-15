import React, {FC} from 'react';

import QuestionRead from "./QuestionRead";
import {QuestionFromServer} from "../../types/serverTypes";

interface QuestionProps {
    questions: QuestionFromServer[]
}
const QuestionsRead: FC<QuestionProps> = ({questions}) => {

    return (
        <>
            {
                questions.map(
                    question =>
                        <QuestionRead
                            id = {question._id}
                            key={question._id}
                            options={question.options}
                            text={question.text}
                            category = {question.category}
                            multiple={false}
                        />
                )
            }
        </>
    );
};

export default QuestionsRead;