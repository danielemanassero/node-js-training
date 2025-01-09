import { request } from "node:http";


export function testRequest() {

  // Serialif Color API - https://color.serialif.com/?ref=public_apis&utm_medium=website
  const options = {
    hostname: "color.serialif.com",
    path: "/rgb=85,102,119",
    method: "GET",
    'headers': {},
    'maxRedirects': 20
  }


  const req = request(options, (res) => {
    let chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", () => {
      // var body = Buffer.concat(chunks);
      // console.log(body.toString());
      console.log(JSON.parse(chunks));
    });

    res.on("error", (error) => {
      console.error(error);
    });
  });


  // req.on('response', (res) => {
  //   let result = '';
    
  //   res.on('data', (chunk) => {
  //     result += chunk;
  //   });

  //   res.on('end', () => {
  //     console.log(JSON.parse(result));
  //   })    
  // });


  req.end();
}