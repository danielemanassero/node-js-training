import { createServer } from "node:http";
import url from "node:url";
import { findRgb } from "./color.js";


const server = createServer((req, res) => {

  // console.log("req.url ->", req.url);
  // console.log("req.method ->", req.method);
  // console.log("/******************************/");
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Welcome to Node.js Training!');
  res.end();
});


server.on("request", (req, res) => {
  const urlPamas = url.parse(req.url);

  if (req.method === "GET" && urlPamas.pathname === "/color") {
    const params = urlPamas.query.split('&');
    const rgb = params.filter(item => {
      const values = item.split('=');
      if (values[0] === 'rgb') {
        return values[1]
      }
    });
    findRgb(rgb);
  }

  // console.log("req.url ->", req.url);
  // console.log("req.method ->", req.method);
  // console.log("url parse ->", url.parse(req.url));
  // console.log("url parse query ->", urlPamas.query);

});


server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1.3000');
});