const express = require('express');

// Route
const studentRoute = require('./route/studentRoute');

const port = process.env.PORT || 5050;

const app = express();

app.use('/api', studentRoute)

// app.get('/', (req, res) => {
//     res.send('<h1>Default!</h1>')
// })

// app.get('/api/people', (req, res) => {
//     res.json(people)
// })

app.listen(port, ()=> console.log('Server created at port 5050!'))

