var http = require('http'),
    fs = require('fs')



http.createServer((request, response)=>{
    
    fs.readFile('./index.html',(error, html) => {
        response.writeHead(200,{'Content-type':'application/json'});
        response.write(JSON.stringify({'nombre':'Ptolomeo'}));
        response.end();
    });
    
}).listen(8000);


