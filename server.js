const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Elpueblito1',
    database: 'mechanic_appointments'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Endpoint to handle appointment submissions
app.post('/api/appointments', (req, res) => {
    const { name, service, appointment_date } = req.body;
    const sql = 'INSERT INTO appointments (name, service, appointment_date) VALUES (?, ?, ?)';
    db.query(sql, [name, service, appointment_date], (err, result) => {
        if (err) throw err;
        res.send('Appointment booked successfully');
    });
});

// Endpoint to retrieve appointments
app.get('/api/appointments', (req, res) => {
    const sql = 'SELECT * FROM appointments ORDER BY created_at DESC';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
