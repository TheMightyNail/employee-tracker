const mysql = require('mysql2');

const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Cr0ud0kun7!',
    database: 'employeeTracker'
});

module.exports = db;