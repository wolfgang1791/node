var express = require('express');

var app = express();

app.set('view engine', 'jade');

app.get('/',(request,response)=>{
    response.render('index');
});

app.get('/login',function(request,response){
    
    response.render('login');
});


app.listen(8000);