// import { createServer } from 'http';
//
// const server = createServer((req, res) => {
//
//     res.writeHead(200, {'content-type': 'text/html; charset-utf8'});
//     const url = new URL(req.url, 'http://localhost:8080');
//     const body = `<!DOCTYPE html>
//     <html lang="en">
//         <head>
//         <meta charset="utf-8">
//         <title>Node.js Demo</title>
//         </head>
//         <body>
//         <h1 style="color:green">Hello ${url.searchParams.get('name')}</h1>
//         </body>
//     </html>`;
//     res.end(body);
// });
//
// server.listen(8080, () => {
//     console.log(`Server is listening to http://localhost:${server.address().port}`);
// });

// Loading the module and extracting certain functions by the means of destructuring.
// const { uptime } = require('os');
// console.log(uptime())

// Destructuring
// const person = {
//     name: 'Lisa',
//     age: 32
// };
//
// const {name, age } = person;
// console.log('Name: ', name); // output: Name: Lisa
// console.log('Age: ', age); // Output: Age: 32
//
// const person2 = ['John', 17];
// const [name2, age2] = person2;
// console.log('Name: ', name2); // output: Name: Lisa
// console.log('Age: ', age2); // Output: Age: 32

// loading core modules via the ECMAScript Module System
// how to use the default export of the core
import os from 'os';
console.log(os.uptime());


