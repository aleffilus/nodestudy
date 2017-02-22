var http = require('http');

var server = http.createServer( function(request, response) {

    var categoria = request.url;
    if(categoria == '/tecnologia'){
        response.end("<html><body> Noticías de Tecnologia </body></html>");
    } else if(categoria == '/moda'){
        response.end("<html><body> Noticías de Moda </body></html>");
    }  else if(categoria == '/beleza'){
        response.end("<html><body> Noticías de Beleza </body></html>");
    } else{
        response.end("<html><body> Portal de notícias </body></html>");
    }

});

server.listen(3000);
