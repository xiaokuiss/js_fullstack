var http = require('http');

http.createServer(function (requst, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('hello world');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');