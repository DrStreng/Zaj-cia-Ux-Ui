const express = require('express');

const app = express()

app.use(express.static('../frontend'))

// GET localhost:8080/
app.get('/', (req, res) => {
    // const name = req.query.name || 'Guest'
    // res.send('<h1>Hello ' + name + '</h1>');
    res.sendFile('index.html', { root: '../frontend/' })
});

app.get('/onas', (req, res) => {
    res.sendFile('onas.html', { root: '../frontend/' })
});

app.get('/api', (req, res) => {
    const name = req.query.name || 'Guest'
    res.json({ "name": name });
})

const port = 80; // Default HTTP WWW Port

app.listen(port, 'localhost', () => {
    console.log('Server listening on http://localhost:' + port + '/')
});
