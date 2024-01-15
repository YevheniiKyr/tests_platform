export interface OneQuestionAnswer {
    questionId: string
    correctOptionsId: string[]
}

export interface FinalAnswer {
    answers: OneQuestionAnswer[]
    quizId: string
}



export interface QuizInit {
    ids: string[],
    quizId: string
}

export interface Answer {
    questionId: string,
    optionId: string
}