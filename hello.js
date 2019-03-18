var http = require('http');

var manejador = function(request, response){
    console.log('SHIT Mundo');
    
};

var servidor = http.createServer(manejador);

servidor.listen(8000);
