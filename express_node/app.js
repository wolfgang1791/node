var express = require('express');

var app = express();

app.get('/',(request,response)=>{
    response.send('Yeah');
});

app.listen(8000);