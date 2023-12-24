import {Category, Question} from "./QuizTypes.js";

type QuizBody = {
    name: string;
    description: string;
    questions: Question[]
}

type Message = { [key: string]: string };

export { QuizBody, Message };