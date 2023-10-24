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
}];

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
