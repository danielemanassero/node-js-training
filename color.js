import { request } from "node:http";


export function findRgb(rgbValues) {

  // Serialif Color API - https://color.serialif.com/
  const options = {
    hostname: "color.serialif.com",
    path: `/rgb=${rgbValues}`,
    // path: "/rgb=85,102,119",
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
      var body = Buffer.concat(chunks);
      console.log(JSON.parse(body));
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