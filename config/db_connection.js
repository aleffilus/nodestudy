var mysql = require('mysql');
var conexaoMySQL = function() {
     return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password :  'F05021996S',
        database : 'portal_noticias'
    });
}

 module.exports = function(){   
   return conexaoMySQL;
}