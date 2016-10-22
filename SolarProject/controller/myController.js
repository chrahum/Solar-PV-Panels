angular.module("myApp").controller("myController", function($scope, $http) {

        $http.get("http://localhost:8080/json/equipment.json")
            .then(function(response) {
                console.log(response.data.panels[0].brand[0])
            }); 

});