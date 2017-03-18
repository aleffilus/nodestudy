module.exports.formulario_inclusao_noticia = function(application, request, response){
    response.render("admin/form_add_noticia", {validacoes: {}, noticia:{}});
}

module.exports.noticia_salvar = function(application, request, response){
    var noticia = request.body;

    request.assert('titulo','Título é obrigatório').notEmpty();
    request.assert('resumo','Resumo é obrigatório').notEmpty();
    request.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    request.assert('autor','Autor é obrigatório').notEmpty();
//        request.assert('data_noticia','Data da Notícia é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
    request.assert('data_noticia','Data da Notícia é obrigatório').notEmpty();
    request.assert('data_noticia','Data da Notícia é deve ser uma data').isDate({format: 'YYYY-MM-DD'});
    request.assert('noticia','Notícia é obrigatório').notEmpty();

    var erros = request.validationErrors();

    if(erros == false){
        var conexao = application.config.db_connection();
        var noticiasDAO = new application.app.models.NoticiasDAO(conexao); 

        noticiasDAO.salvarNoticia(noticia, function(error, result){
            response.redirect("/noticias");
        });  
    }else{
        response.render("admin/form_add_noticia", {validacoes: erros, noticia: noticia});
        return;
    }
}