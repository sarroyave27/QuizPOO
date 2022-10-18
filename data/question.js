import {Question} from "../models/question.js";
import {data} from "./data.js";

// se crea una nueva pregunta y le enviamos la informacion
export const questions = data.map(
    (question) => 
        new Question(question.question, question.choices, question.answer)
);