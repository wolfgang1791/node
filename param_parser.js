


var parse = (request) => {
    
    let parametros = [];
    
    var parametros_data = [];

    if(request.url.indexOf('?') > 0){
    
        var url_data = request.url.split('?');
    
        parametros = url_data[1].split('&');
    }

    let aux = 0;
    
    for (let i = 0; i < parametros.length; i++) {
        aux = parametros[i].split('=');
        parametros_data[aux[0]]=aux[1];
    }

    return parametros_data;
    
}

module.exports.parse = parse;