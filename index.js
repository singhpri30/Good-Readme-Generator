const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./Develop/utils/generateMarkdown.js")

//these questions will be prompted to the user
const questions = [
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub user name?"
    },

    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "What is the description of project?"
    },
    {
        type: "input",
        name: "Contents",
        message: "What are the project contents?"
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps for installation?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the usage of this project?"
    },
    {
        type: "list",
        name: "License",
        message: "Select license from the list",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "none"],
    },
    {
        type: "input",
        name: "Contributors",
        message: "Who are the contributors?"
    },
    {
        type: "input",
        name: "Tests",
        message: "Did you run any tests?"
    },
    {
        type: "input",
        name: "Questions",
        message: "For question email me:"
    },
];
inquirer.prompt(questions).then(answers => {

    let markDownFileContent = generateMarkDown(answers); //pass all the answers to generateMarkdown function
    writeAnswers(markDownFileContent); //call writeAnswers function to write a file



})

function writeAnswers(markDownFileContent) { //this will write the contents into README file.
    fs.writeFile("README.md", markDownFileContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}




