const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function viewRoles(questions) {
    Db.findAllRoles().then(([data]) => {
        console.table(data)
    }).then(() => questions())
}

module.exports = viewRoles;