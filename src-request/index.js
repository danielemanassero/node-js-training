import http from "node:http";
import url from "node:url";
import { findRgb } from "./color.js";


const server = http.createServer((req, res) => {});


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

  } else if (req.method === "GET" && urlPamas.pathname === "/test") {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Test page');
    res.end();

  } else {

    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('Page Not Found');
    res.end();

  }

  // console.log("req.url ->", req.url);
  // console.log("req.method ->", req.method);
  // console.log("url parse ->", url.parse(req.url));
  // console.log("url parse query ->", urlPamas.query);

});


server.listen(3000, '127.0.0.1', () => {
  console.log('REQUEST TEST Server running at http://127.0.0.1:3000');
});