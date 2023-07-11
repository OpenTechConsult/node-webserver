import { createServer } from 'http';

const server = createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain; charset-utf8'});
    res.write('Hello ');
    res.end(' World\n');
});

server.listen(8080, () => {
    console.log(`Server is listening to http://localhost:${server.address().port}`);
});