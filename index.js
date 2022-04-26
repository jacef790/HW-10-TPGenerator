// variables
const inquirer = require('inquirer');
// const fs = rquire('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
 
// initial prompt

const initPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Your Name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: 'Enter your employee ID (Required)',
            validate: ID => {
                if (ID) {
                    return true;
                } else {
                    console.log('Enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Enter your office number!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};



initPrompt();