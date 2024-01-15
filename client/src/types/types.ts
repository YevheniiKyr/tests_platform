
export interface Option {
    id: number;
    text: string;
    correct: boolean

}

export interface Question {
    id: number;
    text: string;
    options: Option[];
    category: Category;

}

export type Category = "multiple" | "single"


export interface Quiz {
    description: string | null;
    author: string | null;
    name: string
    questions: Question[],
    _id: string
}
