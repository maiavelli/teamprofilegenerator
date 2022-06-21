// variables for required dependencies
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const renderHTML = require('./src/renderHTML');
const fs = require('fs');
const path = require('path');

//array to push team members into
const teamMembers = [];

// add manager
function addManager() {
inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of your team manager?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter a name!')
                    return false
                }
            }
        },

        {
            type: "input",
            name: "managerID",
            message: "What is the team manager's employee ID Number?",
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log('Please enter an ID number!')
                    return false
                }
            }
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Please enter an email address!')
                    return false
                }
            }
        },

        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true
                } else {
                    console.log('Please enter an office number!')
                    return false
                }
            }
        }
    ])
    .then(answers => {
        console.log(answers);
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        chooseTeam();
    });
};

// add engineer 
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of your engineer?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!')
                    return false
                }
            }
        },

        {
            type: "input",
            name: "engineerID",
            message: "What is your engineer's employee ID Number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an id number!')
                    return false
                }
            }
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!')
                    return false
                }
            }
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's GitHub username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username!')
                    return false
                }
            }
        }
    ])
    .then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        chooseTeam();
    })
};

// add intern
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of your intern?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!')
                    return false
                }
            }
        },

        {
            type: "input",
            name: "internID",
            message: "What is your intern's employee ID Number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an id number!')
                    return false
                }
            }
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address!')
                    return false
                }
            }
        },

        {
            type: "input",
            name: "internSchool",
            message: "What school does your intern attend?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter a school name!')
                    return false
                }
            }
        }
    ])
    .then(answers => {
        console.log(answers);
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        chooseTeam();
    })
};



// menu to choose which employee to add or to finish building team
function chooseTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "Choose an employee to add:",
            choices: [
                "engineer",
                "intern",
                "I'm finished building my team!"
            ]
        }
    ])
    .then(userChoice => { 
        switch (userChoice.employeeType) {
            case "engineer":
                addEngineer();
                break;
            case "intern":
                addIntern();
            default:
                buildTeam();
        }
});
};

// function to generate html file
function buildTeam() {
    fs.writeFile('sample.html', renderHTML(teamMembers), function (err) {
        err ? console.error(err) : console.log('html generated!')
    })
};

// start app
addManager();