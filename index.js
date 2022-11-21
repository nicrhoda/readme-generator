// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install or use the application:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how the application is to be used:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please enter a license:'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Explain how to contribute to this project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Explain the tests for the application:'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
