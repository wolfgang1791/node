var http = require('http'),
    fs = require('fs')



http.createServer((request, response)=>{
    
    fs.readFile('./index.html',(error, html) => {

        let html_string = html.toString();
        
        let variables = html_string.match(/[^\{\}]+(?=\})/g);
        console.log(variables);
        
        
        var nombre = 'Pomp';

        for (let index = 0; index < variables.length; index++) {
            var value = eval(variables[index]);

            html_string = html_string.replace(`{${variables[index]}}`,value);
            
        }

        response.writeHead(200,{'Content-type':'text/html'});
        response.write(html_string);
        response.end();
    });
    
}).listen(8000);


