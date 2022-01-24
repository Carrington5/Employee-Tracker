const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function viewEmployees(questions) {
    Db.findAllEmployees().then(([data]) => {
        console.table(data)
    }).then(() => questions())
}

module.exports = viewEmployees;