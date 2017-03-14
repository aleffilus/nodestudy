var mysql = require('mysql');
var conexaoMySQL = function() {
    console.log('Coxexao com o banco foi estabelicida')
     return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password :  'F05021996S',
        database : 'portal_noticias'
    });
}

 module.exports = function(){   
     console.log('O autoload carregou o modulo de conexão com o banco de dados');
   return conexaoMySQL;
}