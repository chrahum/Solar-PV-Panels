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

$scope.clickPanel = function(panel) {
    $scope.selectedPanel = panel; 
}


$scope.selectedInverter = ""; 

$scope.clickInvert = function(panel) {
    $scope.selectedInverter = inverter; 
}

$scope.selectedMount = ""; 

$scope.clickMount = function(panel) {
    $scope.selectedMount = mount; 
}


$scope.selectedContractor = ""; 

$scope.clickContractor = function(panel) {
    $scope.selectedContractor = contractor; 
}


$scope.numberPanels="";
$scope.panelPower = "";
$scope.panelPrice ="";
$scope.mountPrice ="";
$scope.inverPrice = "";
$scope.finalPrice = "";

 $scope.calculateprice = function() {


$scope.panelPower = parseInt(panels[0].brand.model);
$scope.numberPanels= $scope.size/$scope.panelPower;
$scope.panelPrice= $scope.numberPanels*panels[0].price;
$scope.mountPrice = $scope.mounts.price;
$scope.inverPrice = $scope.inver.price;

$scope.finalPrice = $scope.panelPrice + $scope.mountPrice+ $scope.inverPrice

 }












}); //the end do not delete