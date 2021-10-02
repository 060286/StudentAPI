const Student = require('./models/Student');
const express = require('express');
const app = express();
const students = require('./router/studentRoute');

// Khai báo port
const PORT = 8000;

// Setup body parser 
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API for Student management.');
});

app.use('/api/v1', students);

app.listen(PORT, () => {
    console.log(`Port ${PORT} running`);
});