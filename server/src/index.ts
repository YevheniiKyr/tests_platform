import express from 'express';
import quizRouter from './quizRouter.js'
import errorHandler from "./errorHandler.js";
require("dotenv").config();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;
const app = express();

// create Mongo DB and Connect to it
app.use(express.json());
app.use("/quizzes", quizRouter);
app.use(errorHandler);
app.listen(PORT, () => console.log("server is started"));