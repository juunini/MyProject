var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  res.writeHead(200, {'content-Type' : 'text/html'});
  res.end(";");
});

server.listen(8000);
console.log("127.0.0.1:8000");
