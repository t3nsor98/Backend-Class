const http = require('http');

const server = http.createServer((req, res) => {
    console.log("New connection");
  res.end('Hello World');
});

server.listen(8000, 'localhost', () => {
    console.log('Server started on http://localhost:3000');
});