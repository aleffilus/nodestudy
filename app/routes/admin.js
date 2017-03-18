module.exports = function(application) {
   application.get("/formulario_inclusao_noticia", function(request, response){
        response.render("admin/form_add_noticia");
   });

   application.post("/noticias/salvar", function(request, response){
        var noticia = request.body;

        var conexao = application.config.db_connection();
        var noticiasDAO = new application.app.models.NoticiasDAO(conexao); 

        noticiasDAO.salvarNoticia(noticia, function(error, result){
            response.redirect("/noticias");
        });  
    });
}; 