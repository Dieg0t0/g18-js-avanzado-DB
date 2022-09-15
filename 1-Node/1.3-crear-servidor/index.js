const http = require('http');

http.createServer((request, Response) => {
    const status = 200; // OK
    const mymeType = {'Content-type': 'text/html'}
    response.writeHead(status, mymeType)
    response.write('<html><body> hola desde mi primer servidor </body></html>')
    response.end() 

});


server.listen(8000);
console.log('servidor ejecutandose...');