const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function updateEmployee(questions) {
    let empArr = [];
    let empList = Db.employeeList().then(([data]) => {
        data.map(element => (
            empArr.push(
            {
                name: element.employee_name,
            }
        )))
    })
    let roleArr = [];
    let roleList = Db.roleList().then(([data]) => {
        data.map(element => (
            roleArr.push(
            {
                name: element.title,
            }
        )))
    })
    inquire.prompt([
        {
            type: 'list',
            name: 'updater',
            message: "Please select your posisiton as the recorded updater.",
            choices: ['manager', 'accountant', 'captain'],
            default: 'manager'
        },
        {
            type: 'list',
            name: 'selectedEmployee',
            message: 'Which employee would you like to update?',
            choices: empArr
        },
        {
            type: 'list',
            name: 'selectedRole',
            message: 'Which role should be assigned to this employee?',
            choices: roleArr
        }
    ]).then(answer => {
        let employeeNames = answer.selectedEmployee.split(' ');
        let firstName = employeeNames[1];
        let lastName = employeeNames[2];
        Db.updateEmployee(answer.selectedRole, firstName, lastName);
    }).then(() => questions());
}

module.exports = updateEmployee;