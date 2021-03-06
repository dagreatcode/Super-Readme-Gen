// Package Imports
// inquirer
// fs
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    inquirer.prompt([
        {
        name: "title",
        type: "input",
        message: "Title?",
        },
        {
        name: "description",
        type: "input",
        message: "Description?",
        },
        {
        name: "usage",
        type: "input",
        message: "Usage?",
        },
        {
        name: "contributing",
        type: "input",
        message: "Contributing?",
        },
        {
        name: "test",
        type: "input",
        message: "test?",
        },
        {
        name: "license",
        type: "input",
        message: "License",
        },
    ])
    .then((response) => {
        console.log(response);

        const markdown = generateMarkdown(response);

        writeFileAsync("README.md", markdown)
        .then(() => {
          console.log("Successfully wrote file.");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    })
];

// fs.writeFile("test.txt", "utf8", function(error, data) {

//     if (error) {
//       return console.log(error);
//     }
  
//     console.log(data);
  
// });

// function to write README file
function writeToFile(fileName, data) {
    return ``;
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

// console.log(process.argv)
