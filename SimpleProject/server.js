var http = require('http');
const { on } = require('process');

function onRequest(req, res) {
    res.writeHead(200, { "Content-Type": "text/plan" });
    res.write("Hello Word");
    res.end();
}
http.createServer(onRequest).listen(8000);