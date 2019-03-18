var http = require('http');

var manejador = function(request, response){
    console.log('SHIT Mundo');
    response.end('Navegador');
};

var servidor = http.createServer(manejador);

servidor.listen(8000);
