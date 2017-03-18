//var db_conexao = require('../../config/db_connection');

module.exports = function(application) {
    /*
        var conexao = db_conexao();
    */
    application.get("/noticias", function(request, response){
        var conexao = application.config.db_connection();
        var noticiasDAO = new application.app.models.NoticiasDAO(conexao); 

        noticiasDAO.getNoticias(function(error, result){
            response.render("noticias/noticias", { noticias: result });
        });

    });
};