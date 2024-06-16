#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is the correct way to check if two values are not equal is typescript? ",
        choices: ["a == b", "a === b", "a = b", " a !== b"],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.which of the following characters is commonly allowed in variable mames in typescript? ",
        choices: ["$", "@", "#", "&"],
    }, {
        name: "question_3",
        type: "list",
        message: "Q3.which operator is commonly used for string concatenation in typesscript? ",
        choices: ["+", "-", "*", "/"],
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4. in typesscript,which symbol is commonly used to terminate a statement? ",
        choices: [".", ":", ";", ","],
    }, {
        name: "question_5",
        type: "list",
        message: "Q5.which method of inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run()"],
    },
]);
let score = 0;
switch (quiz.question_1) {
    case " a !== b":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. incorrect!");
}
switch (quiz.question_2) {
    case "$":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. incorrect!");
}
switch (quiz.question_3) {
    case "+":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. incorrect!");
}
switch (quiz.question_4) {
    case ";":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. incorrect!");
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. incorrect!");
}
console.log(`score: ${score}`);
