const Db = require('./db/index');
const consoleTable = require('console.table');
const inquire = require('inquirer');
const actions = require('./utils/index');

const questions = function() {
    inquire.prompt([
        {
            type: 'list',
            name: 'initialChoice',
            choices: [{
                name: 'View all departments',
                value: 'viewDept'
            },
            {
                name: 'View all roles',
                value: 'viewRoles'
            },
            {
                name: 'View all employees',
                value: 'viewEmployees'
            },
            {
                name: 'Add a department',
                value: 'addDept'
            },
            {
                name: 'Add a role',
                value: 'addRole'
            },
            {
                name: 'Add an employee',
                value: 'addEmployee'
            },
            {
                name: 'Update an employee role',
                value: 'updateEmployee'
            },
            {
                name: 'Remove department',
                value: 'removeDept'
            }]
        }
    ]) .then(({initialChoice}) => {
        if (initialChoice === 'viewDept') actions.viewDept(questions);
        else if (initialChoice === 'viewRoles') actions.viewRoles(questions);
        else if (initialChoice === 'viewEmployees') actions.viewEmployees(questions);
        else if (initialChoice === 'addDept') actions.addDept(questions);
        else if (initialChoice === 'addRole') actions.addRole(questions);
        else if (initialChoice === 'addEmployee') actions.addEmployee(questions);
        else if (initialChoice === 'updateEmployee') actions.updateEmployee(questions);
        else if (initialChoice === 'removeDept') actions.removeDept(questions);
    });
}
questions();