module.exports.noticias = function(application, request, response){
    var conexao = application.config.db_connection();
    var noticiasDAO = new application.app.models.NoticiasDAO(conexao); 

    noticiasDAO.getNoticias(function(error, result){
        response.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = function(application, request, response){
     var conexao = application.config.db_connection();
        var noticiasDAO = new application.app.models.NoticiasDAO(conexao); 

        noticiasDAO.getNoticia(function(error, result){
            response.render("noticias/noticia", { noticia: result });
        });
}