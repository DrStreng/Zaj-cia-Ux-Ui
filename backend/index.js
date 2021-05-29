const express = require('express');

const app = express()

app.use(express.static('../frontend'))

// GET localhost:8080/
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '../frontend/' })
});

app.get('/onas', (req, res) => {
    res.sendFile('onas.html', { root: '../frontend/onas/' })
});

app.get('/elementy', (req, res) => {
    res.sendFile('elementy.html', { root: '../frontend/html5/' })
});

app.get('/struktura', (req, res) => {
    res.sendFile('struktura.html', { root: '../frontend/html5/' })
});
app.get('/tabele', (req, res) => {
    res.sendFile('tabele.html', { root: '../frontend/html5/' })
});

app.get('/api', (req, res) => {
    const name = req.query.name || 'Guest'
    res.json({ "name": name });
})

const port = 80; // Default HTTP WWW Port

app.listen(port, 'localhost', () => {
    console.log('Server listening on http://localhost:' + port + '/')
});

