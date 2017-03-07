var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
rotaFormInclusaoNoticia(app);

app.listen(3000, function(){
    console.log("SERVIDOR RODANDO COM EXPRESS");
}); 
