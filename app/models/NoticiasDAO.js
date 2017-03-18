function NoticiasDAO(conexao){
    this._conexao = conexao;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._conexao.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._conexao.query('select * from noticias where id_noticia = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._conexao.query('insert into noticias set ?', noticia, callback);
}


module.exports = function(){
    return NoticiasDAO;
}