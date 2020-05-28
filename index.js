const inquirer = require("inquirer");
const fs = require("fs");
//const util = require("util");

//const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of project?"
    },
    {
        type: "input",
        name: "project contents",
        message: "What are the project contents?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps for project installation?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this project?"
    },
    {
        type: "input",
        name: "license",
        message: "Provide license details."
    }
];
inquirer.prompt(questions).then(answers => { //answer is an object
    console.log(answers.title);
    writeAnswers(answers);
})
function writeAnswers(answers) {
    fs.writeFile("README.md", JSON.stringify(answers), (err) => {
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