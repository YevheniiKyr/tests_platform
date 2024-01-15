
export type Category = "multiple" | "single"

export type Option = {
    text: string,
    correct: boolean,
}

export type Question = {
    text: string,
    options: Option[],
    category: Category
}

export type Quiz = {
    name: string;
    description: string;
    Questions: Question[]
}

type QuizBody = {
    name: string;
    description: string;
    author: string
    questions: Question[]
}

type Message = { [key: string]: string };

export {QuizBody, Message};