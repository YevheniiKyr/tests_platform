
export type Category = "multiple" | "single"

export type Options = {
    correct_options: string[],
    other_options: string[]
}

export type Question = {
    text: string,
    options: Options[],
    category: Category
}

export type Quiz = {
    name: string;
    description: string;
    Questions: Question[]
}