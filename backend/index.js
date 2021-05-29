const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {

    if (req.url == '/now') {

        res.setHeader(200, {'Content-Type': 'application/json'});
        res.write('Hello World!');
        res.end();

    } else {
        res.end('Invalid request');
    }
}).listen(port);



