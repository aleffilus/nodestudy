module.exports = function(app) {
    app.get("/noticia", function(request, response){
        var conexao = app.config.db_connection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(conexao , function(error, result){
            response.render("noticias/noticia", { noticia: result });
        });
      
    });
};