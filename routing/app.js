var express = require('express');

var app = express();

app.set('view engine', 'jade');

app.get('/',(request,response)=>{
    response.render('index');
});

app.get('/:nombre',function(request,response){
    console.log(request.params);
    response.render('form',{nombre:request.params.nombre});
});

app.post('/',(request,response)=>{
    response.render('form');
});
app.listen(8000);