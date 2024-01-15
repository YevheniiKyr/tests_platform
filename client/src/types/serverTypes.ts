import {Category} from "./types";

export interface QuizFromServer {
    description: string | null;
    author: string | null;
    name: string
    questions: QuestionFromServer[],
    _id: string
}

export interface QuestionFromServer {
    _id: string;
    text: string;
    options: OptionFromServer[];
    category: Category;
}

export interface OptionFromServer {
    text: string;
    correct: boolean
    _id: string
}

export type QuizzesFromServer = QuizFromServer[]


export interface QuestionToServer {
    text: string;
    category: Category,
    options: OptionToServer[];
}

export interface OptionToServer {
    text: string;
    correct: boolean
}

export type QuizBody = {
    name: string;
    description: string;
    questions: QuestionToServer[];
    author: string
}

export type Result = {
    correct: number,
    total: number
}