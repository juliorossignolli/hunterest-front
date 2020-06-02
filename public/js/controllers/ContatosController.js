angular.module('ifsp').controller('ContatosController',function($scope){
    $scope.total = 0;
    $scope.incrementa = function(){
        $scope.total++;
    };

    $scope.contatos = [
        {"_id": 1,"nome": "Joao Pedro", "email": "joao@gmail.com"},
        {"_id": 2,"nome": "Pedro Carlos", "email": "pedro@gmail.com"},
        {"_id": 3,"nome": "Carlos Pedro", "email": "carlos@gmail.com"}
    ];
    $scope.filtro = "";
});
