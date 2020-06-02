angular.module('ifsp',['ngRoute']);

angular.module('ifsp',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/contatos',{
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    });
    
    $routeProvider.when('/contato/:contatoId',{
        templateUrl: 'partials/contatos.html',
        controller: 'ContatoController'
    });
    
    $routeProvider.otherwise({redirectTo:'/contatos'});

});