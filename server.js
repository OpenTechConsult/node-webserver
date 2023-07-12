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
const { uptime } = require('os');
console.log(uptime())

