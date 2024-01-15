export interface OneQuestionAnswer {
    questionId: string
    correctOptionsId: string[]
}

export interface QuizAnswer {
    answers: OneQuestionAnswer[]
}


export interface Result {
    correct: number,
    total: number
}