import mongoose from 'mongoose'

const OptionSchema = new mongoose.Schema({
    text: {type: String, required: true}
})

export const OptionModel = mongoose.model('Option', OptionSchema);