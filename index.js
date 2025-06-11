import http from "node:http";

const server = http.createServer((req, res) => {});

server.on("request", (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Welcome to the main server page!');
  res.end();
});

server.listen(3000, '127.0.0.1', () => {
  console.log('MAIN Server running at http://127.0.0.1:3000');
});