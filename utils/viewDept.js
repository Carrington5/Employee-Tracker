const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function viewDept(questions) {
    Db.findAllDepartment().then(([data]) => {
        console.table(data)
    }).then(() => questions())
}

module.exports = viewDept;