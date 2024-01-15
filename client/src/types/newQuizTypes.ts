import {Category, Option, Question} from "./types";

export interface NewQuiz {
    description: string;
    author: string ;
    name: string;
    image: string;
    questions: Question[],
    freeQuestionId: number;
    freeOptionId: number;

}

export interface NewOption {
    text: string;
    questionId: number;
}

export interface DeleteOption {
    id: number;
    questionId: number;

}

export interface EditOption {
    id: number;
    questionId: number;
    text: string;
    correct: boolean;

}

export interface NewQuestion {
    text: string;
    options: Option[];
    category: Category;
}


export interface DeleteQuestion {
    id: number;
}

export interface EditQuestion {
    id: number;
    text: string;
    category: Category
}

export interface QuizInfo {
    description: string,
    name: string,
    author: string
}

export interface ChangeQuestionCategory {
    id: number,
    category: Category
}

export type QuestionCategory = "multiple" | "single"
