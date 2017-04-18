var http = require('http');
var PORT_7000 = 7000;
var PORT_7500 = 7500;

function serverResponse(request, response){
    response.end("It Works! Path Hit: " + request.url);
}

var server = http.createServer(serverResponse);

server.listen(PORT_7000, function(){
    console.log("Server has been started. Listening on http://localhost:" + PORT_7000);
});

function serverResponse75(request, response){
    response.end("It Works! Path Hit: " + request.url);
}

var server75 = http.createServer(serverResponse75);

server75.listen(PORT_7500, function(){
    console.log("Server has been started. Listening on http://localhost:" + PORT_7500);
});