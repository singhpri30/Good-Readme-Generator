const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./Develop/utils/generateMarkdown.js")
console.log(generateMarkDown);
//const util = require("util");

//const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
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
        name: "Contents", //change this
        message: "What are the project contents?"
    },
    {
        type: "input",
        name: "Installation", //two steps
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
        choices: ["MIT", "License1", "License2"],
    },
    {
        type: "input",
        name: "Contributors",
        message: "Who are the contributors?"
    },
    {
        type: "input",
        name: "Tests",
        message: "Who are the tests?"
    },
    {
        type: "input",
        name: "Questions",
        message: "Do you have any questions?"
    },
];
inquirer.prompt(questions).then(answers => { //answer is an object
    console.log(answers.Title);
    //writeAnswers(answers);
    let test = generateMarkDown(answers);
    console.log(test);
    writeAnswers(test);



})
function writeAnswers(test) {
    fs.writeFile("README.md", test, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}




// function writeToFile(fileName, data) {
    //capture all the answer and write into a file
// }

// function init() {

// }

// init();