import {questions} from "./data/question.js";
import { Quiz } from "./models/quiz";


// inicializacion del aplicativo
function main() {
    const quiz = new Quiz(questions);

    console.log(quiz);
}

main();


