var http = require('http'),
    fs = require('fs')



http.createServer((request, response)=>{
    
    if(request.url.indexOf('favicon.ico') > 0){
        return;
    }
    

    fs.readFile('./index.html',(error, html) => {

        let html_string = html.toString();
        
        let variables = html_string.match(/[^\{\}]+(?=\})/g);
        
        let parametros = [];
        var parametros_data = [];
        
        var nombre = '';

        if(request.url.indexOf('?') > 0){
            var url_data = request.url.split('?');
            parametros = url_data[1].split('&');
        }

        let aux = 0;
        for (let i = 0; i < parametros.length; i++) {
            aux = parametros[i].split('=');
            parametros_data[aux[0]]=aux[1];
        }

       // nombre = parametros_data[aux[0]];

        console.log(parametros_data);
        

        for (let index = 0; index < variables.length; index++) {
            var value = eval(variables[index]);

            html_string = html_string.replace(`{${variables[index]}}`,parametros_data[aux[index]]);
            
        }

        response.writeHead(200,{'Content-type':'text/html'});
        response.write(html_string);
        response.end();
    });
    
}).listen(8000);


