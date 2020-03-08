var http = require('http');

const hostname = process.env.hostname || '0.0.0.0'
const port = process.env.PORT || 3002

//server
const server = http.createServer(function(req, res){
    res.statusCode=200;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello from Node.js');
    res.end();

}).listen(port, hostname, () =>{
    console.log(`Server running at http://localhost:${port}`)
});

