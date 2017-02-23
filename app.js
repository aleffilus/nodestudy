var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get("/", function(request, response){
    response.send("<html>Portal de Noticias</html>");
});

app.get("/tecnologia", function(request, response){
    response.render("secao/tecnologia");
});

app.listen(3000, function(){
    console.log("SERVIDOR RODANDO COM EXPRESS");
});
