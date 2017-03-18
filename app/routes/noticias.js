//var db_conexao = require('../../config/db_connection');

module.exports = function(application) {
    /*
        var conexao = db_conexao();
    */
    application.get("/noticias", function(request, response){
        application.app.controllers.noticiasController.noticias(application, request, response);
    });

    application.get("/noticia", function(request, response){
        application.app.controllers.noticiasController.noticia(application, request, response);
    });
};