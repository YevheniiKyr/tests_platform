import mongoose from 'mongoose'
import {required} from "joi";

const QuizSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: String, required: true},
    questions: [{
        text: {type: String, required: true},
        options: [{
            text: {type: String, required: true},
            correct: {type: Boolean, required: true},
        }]
    }],
})

export const QuizModel = mongoose.model('Quiz', QuizSchema);