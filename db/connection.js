const mysql = require('mysql12');

const db =  mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employeeTracker'
});

module.exports = db;