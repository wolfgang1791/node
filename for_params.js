var http = require('http'),
    fs = require('fs'),
    parse = require('./param_parser.js');

var funcion_parser = parse.parse;

http.createServer((request, response)=>{
    
    if(request.url.indexOf('favicon.ico') > 0){
        return;
    }
    

    fs.readFile('./index.html',(error, html) => {

        let html_string = html.toString();
        
        let variables = html_string.match(/[^\{\}]+(?=\})/g);
        
        
        
        

        
        var parametros_data = funcion_parser(request);

        console.log(parametros_data);
        

        for (let index = 0; index < variables.length; index++) {
           
            var value = variables[index];

            html_string = html_string.replace(`{${variables[index]}}`,parametros_data[value]);
            
        }

        response.writeHead(200,{'Content-type':'text/html'});
        response.write(html_string);
        response.end();
    });
    
}).listen(8000);


