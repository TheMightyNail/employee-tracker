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

module.exports = router;