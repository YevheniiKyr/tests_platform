export interface Option {
    id: number;
    text: string;

}

export interface Question {
    id: number;
    text: string;
    options: Option[];

}

export type QuizBody = {
    name: string;
    description: string;
    questions: Question[]
}



export interface Quiz {
    description: string | null;
    author: string | null;
    image: string | null;
    questions: Question[],
}