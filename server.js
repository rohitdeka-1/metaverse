const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
    host: process.env.DB_HOST, // Use DB_HOST from the .env file
    user: process.env.DB_USERNAME, // Use DB_USERNAME from the .env file
    password: process.env.DB_PASSWORD, // Use DB_PASSWORD from the .env file
    database: process.env.DB_DATABASE, // Use DB_DATABASE from the .env file
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

app.post('/submit', (req, res) => {
    const { email, name, reg } = req.body;

    if (!email || !name || !reg) {
        return res.status(400).send('Please provide all required fields.');
    }

    const query = 'INSERT INTO users (email, name, registration_number) VALUES (?, ?, ?)';
    db.execute(query, [email, name, reg], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err.stack);
            return res.status(500).send('Error inserting data');
        }

        res.send('Data submitted successfully!');
    });
});



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
