const Db = require('../db');
const consoleTable = require('console.table');
const inquire = require('inquirer');

function removeDept(questions) {
    inquire.prompt({
        type: 'input',
        name: 'name',
        message: 'Which department should be removed?'
    }).then(answer => {
       return Db.removeDepartment(answer.name);  
    }).then((data) => questions());
};

module.exports = removeDept;