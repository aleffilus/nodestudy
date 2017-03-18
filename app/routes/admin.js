module.exports = function(application) {
   application.get("/formulario_inclusao_noticia", function(request, response){
        application.app.controllers.adminController.formulario_inclusao_noticia(application, request, response); 
   });

   application.post("/noticias/salvar", function(request, response){
        application.app.controllers.adminController.noticia_salvar(application, request, response);        
    });
}; 