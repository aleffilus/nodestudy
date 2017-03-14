module.exports = function(){

    this.getNoticias = function(conexao, callback) {
        conexao.query('select * from noticias', callback);
    }

    this.getNoticia = function(conexao, callback){
         conexao.query('select * from noticias where id_noticia = 2', callback);
    }

    this.salvarNoticia = function(noticia, conexao, callback){
        conexao.query('insert into noticias set ?', noticia, callback);
    }

    return this;
}