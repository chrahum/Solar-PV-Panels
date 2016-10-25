
angular.module("myApp").controller("myController", function($scope, $http) {

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
$scope.customerBill ; 
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






  $scope.calculateSize = function(){

// bill  has to be more than 150
// some address qualify 
// financing charges
var size;
var cons

for (var i =0; i<companies.length; i++){
    if($scope.companyElectricity == $scope.companies[i].name ){
        var cons = $scope.customerBill/$scope.companies[i].rate
        var size = cons/140
    } return size
}

 }


 $scope.calculateprice = function(){



 }












}); //the end do not delete