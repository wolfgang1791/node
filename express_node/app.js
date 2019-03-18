var express = require('express');

var app = express();

app.set('view engine', 'jade');

app.get('/',(request,response)=>{
    response.render('index',{hola:'FUCK'});
});

app.listen(8000);