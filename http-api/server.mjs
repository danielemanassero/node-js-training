import { createServer } from "node:http";
import { testRequest } from "./module_http.mjs";


const server = createServer((req, res) => {

  // console.log("req.url ->", req.url);
  // console.log("req.method ->", req.method);
  // console.log("/******************************/");
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Welcome to Node.js Training!');
  res.end();
});


server.on("request", (req, res) => {
  console.log("/***** ON REQUEST EVENT *****/");
  console.log("req.url ->", req.url);
  console.log("req.method ->", req.method);
  console.log("/******************************/");
});


server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1.3000');
  
  testRequest();
});