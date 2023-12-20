import { Category } from "./QuizTypes.js";

type QuizBody = {
    name: string;
    content: string;
    category: Category;
    dates: [string];
    archived: boolean;
}

type Message = { [key: string]: string };

export { QuizBody, Message };