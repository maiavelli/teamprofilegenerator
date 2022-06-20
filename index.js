// variables for required dependencies
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const renderHTML = require('./src/renderHTML');
const fs = require('fs');

var fileName = teamProfile;

// add manager
inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the name of your team manager?"
        },

        {
            type: "input",
            name: "managerID",
            message: "What is the team manager's employee ID Number?"
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email address?"
        },

        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?"
        }
    ])
    .then(data => {
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNumber);
    });
    return chooseTeam();
    


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
    .then(data => { 
        if(data.employeeType === "engineer") 
        return addEngineer(); 
        else if(data.employeeType === "intern")
        return addIntern(); })
}

// add engineer 
function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the name of your engineer?"
        },

        {
            type: "input",
            name: "engineerID",
            message: "What is your engineer's employee ID Number?"
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email address?"
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's GitHub username?"
        }
    ])
};

// add intern
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the name of your intern?"
        },

        {
            type: "input",
            name: "internID",
            message: "What is your intern's employee ID Number?"
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email address?"
        },

        {
            type: "input",
            name: "internSchool",
            message: "What school does your intern attend?"
        }
    ])
};


function init() {

}