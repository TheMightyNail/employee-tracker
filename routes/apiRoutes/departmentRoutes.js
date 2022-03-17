const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// get all departments and assigned employees
router.get('/department', (req, res) => {
    const sql = `SELECT department.*, employees.name
                    AS employees_name
                    FROM department
                    LEFT JOIN employees
                    ON departments.employees_id = employees.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// get single department
router.get('/department/:id', (req, res) => {
    const sql = `SELECT department.*
                AS department_name
                WHERE department.id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

module.exports = router;