const express = require('express');


const app = express()

// GET localhost:8080/
app.get('/', (req, res) => {
    // const name = req.query.name || 'Guest'
    // res.send('<h1>Hello ' + name + '</h1>');
    res.sendFile('index.html', { root: '../frontend/' })
});

app.get('/api', (req, res) => {
    const name = req.query.name || 'Guest'
    res.json({ "name": name });
})

const port = 8080;

app.listen(port, 'localhost', () => {
    console.log('Server listening on http://localhost:' + port + '/')
});