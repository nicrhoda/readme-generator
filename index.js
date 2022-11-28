// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        type: 'list',
        name: 'license',
        choices: ['MIT', 'GPL_v2', 'WTFPL', 'MPL_2.0', 'N/A']
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
])
.then((data) => {
    console.log('data', data);
    return generateMarkdown(data);
})

.then(writeToFile = data => {
        fs.writeFile('README.md', data, function(err) {
            err ? console.error(err) : console.log('success');
})
})
};


// TODO: Create a function to initialize app
function init() {
    questions();
};

// Function call to initialize app
init()
