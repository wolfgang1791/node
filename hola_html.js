var http = require('http'),
    fs = require('fs')

// var html = fs.readFileSync('./index.html');


http.createServer((request, response)=>{
    console.log('funcion');
    
    fs.readFile('./index.html',(error, html) => {
        response.write(html);
        response.end();
    });
    
}).listen(8000);


