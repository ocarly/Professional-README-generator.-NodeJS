// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
{
type: "input", 
name: "title",
message: "What is the title of your project?"
},
{
type: "list",
name: "license",
message: "what license do ya need?",
choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},
{ 
type: "input",
name: "email",
message: "What is your email?"
},
{
    type: "input",
    name: "github",
    message: "What is your github username?"
},
{
    type: "input",
    name: "description",
    message: "What is your project about?"
},
{
    type: "input",
    name: "installation",
    message: "Do you need to install anything?"
},
{
    type: "input",
    name: "usage",
    message: "What is your usage about?"
},
{
    type: "input",
    name: "tests",
    message: "are there any testing frameworks in the application?"
},
{
    type: "input",
    name: "contributing",
    message: "Who contributed to this project?"
},
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
console.log(answers)
writeToFile("README.MD", generateMarkdown(answers))
})}

// Function call to initialize app
init();
