module.exports = function(application) {
    application.get("/", function(request, response){
        application.app.controllers.homeController.index(application, request, response);
    });
};