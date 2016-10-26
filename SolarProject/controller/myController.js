angular.module("myApp").controller("myController", function($scope, $http) {

$scope.size = ""; 

//function to  calculate size
    $scope.calculateSize = function () {
    
        for (var i = 0; i < $scope.companies.length; i++) {
            if ($scope.companyElectricity == $scope.companies[i].name) {
               $scope.size=  ($scope.customerBill/$scope.companies[i].rate)/140;
               
            }
        }

    }




//caling the json:
        $http.get("http://localhost:8080/json/equipment.json")
.then(function (response) {
                $scope.panels = response.data.panels[0].brand; 
                $scope.mounts = response.data.mountingBracket; 
                $scope.inver = response.data.inverter; 
                $scope.companies = response.data.companies

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



//ngmodel info from the input:
$scope.customerBill; 
$scope.companyElectricity; 
$scope.address; 
$scope.yesPool; 
$scope.noPool; 
$scope.typeRoof; 
$scope.ageRoof; 
$scope.yesFinance; 
$scope.noFinance; 



$scope.selectedPanel = ""; 

$scope.selectedPanel = function(panel) {
    $scope.currentPanel = panel; 
}






  


 $scope.calculateprice = function() {



 }












}); //the end do not delete