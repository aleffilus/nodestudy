module.exports = function(application) {
    application.get("/noticia", function(request, response){
        var conexao = application.config.db_connection();
        var noticiasDAO = new application.app.models.NoticiasDAO(conexao); 

        noticiasDAO.getNoticia(function(error, result){
            response.render("noticias/noticia", { noticia: result });
        });
      
    });
};