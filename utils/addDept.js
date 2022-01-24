const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function addDept(questions) {
    inquire.prompt({
        type: 'input',
        name: 'name',
        message: 'What is the department name?'
    }).then(answer => {
        Db.addDepartment(answer);  
    }).then(() => questions());
};

module.exports = addDept;