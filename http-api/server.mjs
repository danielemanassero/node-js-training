import { createServer } from "node:http";
import { testRequest } from "./module_http.mjs";


const server = createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text-plain'});
  res.end('Hello World!\n');
});


server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1.3000');
  
  testRequest();
});