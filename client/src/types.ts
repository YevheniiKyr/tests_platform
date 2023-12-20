export interface Option {
    id: number;
    text: string;

}

export interface Question {
    id: number;
    text: string;
    options: Option[];

}

export interface NewQuiz {
    description: string | null;
    author: string | null;
    image: string | null;
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
    text: string

}

export interface NewQuestion {
    text: string;
    options: Option[];
}

export interface DeleteQuestion {
    id: number;
}

export interface EditQuestion {
    id: number;
    text: string;
}