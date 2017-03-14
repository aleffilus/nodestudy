module.exports = function(){

    this.getNoticias = function(conexao, callback) {
        conexao.query('select * from noticias', callback);
    }

    this.getNoticia = function(conexao, callback){
         conexao.query('select * from noticias where id_noticia = 2', callback);
    }

    return this;
}