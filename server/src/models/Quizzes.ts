import mongoose from 'mongoose'

const QuizSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    questions: [{
        text: { type: String, required: true },
        options: {
            correct_options: [{ type: String }],
            other_options: [{ type: String }]
        }
    }]
})

export const QuizModel = mongoose.model('Quiz', QuizSchema);