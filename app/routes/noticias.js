//var db_conexao = require('../../config/db_connection');

module.exports = function(app) {
    /*
        var conexao = db_conexao();
    */
    app.get("/noticias", function(request, response){
        var conexao = app.config.db_connection();

        conexao.query('select * from noticias', function(error, result){
            response.render("noticias/noticias", { noticias: result });
        });
    });
};