
angular.module("myApp").controller("myController", function($scope, $http) {

        $http.get("http://localhost:8080/json/equipment.json")
.then(function (response) {
                $scope.panels = response.data.panels[0].brand; 
                $scope.mounts = response.data.mountingBracket; 
                $scope.inver = response.data.inverter; 

            }); 

$http.get("http://localhost:8080/json/contractors.json")
.then(function (response) {
                $scope.contractors = response.data.contractor; 
            }); 


$http.get("http://localhost:8080/json/engineer.json")
.then(function (response) {
                $scope.engineer = response.data; 
                console.log($scope.engineer);
            }); 





$scope.selectedPanel = ""; 

$scope.selectedPanel = function(panel) {
    $scope.currentPanel = panel; 
}


companies = [];

companies.company1 ={
    name:"SCE",
    rate: 0.35
}

companies.company2 ={
    name:"PGE",
    rate: 0.37
}

companies.company3 ={
    name:"SDGE",
    rate: 0.28
}


 $scope.calculateSystem = function(){

// bill  has to be more than 150
// some address qualify 
// financing charges

 }













}); //the end do not delete