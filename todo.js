#!usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoquestions = await inquirer.prompt([
        {
            name: "todolist",
            type: "input",
            message: "What would you like to add in todo?"
        },
        {
            name: "question1",
            type: "confirm",
            message: "Would you like to add more in your todo? ",
            default: "true"
        }
    ]);
    todos.push(todoquestions.todolist);
    console.log(todos);
    condition = todoquestions.question1;
}
