var http = require('http');
var PORTS = [7000, 7500];
var servers = [];
var s; 


var PORT_7000 = 7000;
var PORT_7500 = 7500;

function serverResponse(request, response){
    response.end("It Works! Path Hit: " + request.url);
}


PORTS.forEach(function(port) {
    s = http.createServer(serverResponse);
    s.listen(port);
    servers.push(s);
});