var mysql = require('mysql');

 module.exports = function(){   
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password :  'F05021996S',
        database : 'portal_noticias'
    });
}