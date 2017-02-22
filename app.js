var express = require('express');
var app = express();

app.get("/", function(request, response){
    response.send("<html>Portal de Noticias</html>");
});

app.get("/tecnologia", function(request, response){
    response.send("<html>Noticias de tecnologia</html>");
});

app.listen(3000, function(){
    console.log("SERVIDOR RODANDO COM EXPRESS");
});
