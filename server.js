///Criando Servidor///

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(requeste, response){
    var url_parts = url.parse(requeste.url);
    var path = url_parts.pathname;
    console.log(path);

    fs.readFile(__dirname + path, function(err,data){
        if(err){
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write('Not Found');
        }else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
        }
        response.end();
    })


});
server.listen(3000);