import express from 'express';
import mongoose from 'mongoose'
import * as process from "process";
import quizRouter from "./api/quiz/quizRouter";
import errorHandler from "./errorHandler";
import cors from "cors";
import answerRouter from "./api/answer/answerRouter";

require("dotenv").config();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;
const app = express();
const MONGO_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.c9ednp2.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(MONGO_URL)
mongoose.connection.on('connected', () => console.log("Connected to DB"))
mongoose.connection.on('error', (error) => console.log(error))

app.use(cors())
app.use(express.json());
app.use("/quizzes", quizRouter);
app.use("/quizzes", answerRouter);

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
