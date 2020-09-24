// Package Imports
// inquirer
// fs
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

// const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    inquirer.prompt([
        {
        name: "userName",
        type: "input",
        message: "What is your name?",
        },
        {
        name: "hobby",
        type: "input",
        message: "What is your favorite hobby?",
        },
        {
        name: "linkedIn",
        type: "input",
        message: "What is your LinkedIn URL?",
        },
    ])
];

// function to write README file
function writeToFile(fileName, data) {
    return ``;
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

console.log(process.argv)
