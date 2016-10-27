angular.module("myApp").controller("myController", function($scope, $http) {

$scope.size = ""; 

//function to  calculate size
    $scope.calculateSize = function () {
    
        for (var i = 0; i < $scope.companies.length; i++) {
            if ($scope.companyElectricity == $scope.companies[i].name) {
               $scope.size =  ($scope.customerBill/$scope.companies[i].rate)/140;
               
            }
        }

    }




//caling the json:
        $http.get("http://localhost:8080/json/equipment.json")
.then(function (response) {
                $scope.panels = response.data.panels[0].brand; 
                $scope.mounts = response.data.mountingBracket; 
                $scope.inverters = response.data.inverter; 
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


$scope.selectedPanel = $scope.panels;
$scope.selectedBracket = $scope.mounts;
$scope.selectedInverter = $scope.inverters;


$scope.equipmentPrice = function(){
    $scope.panelPower = parseInt($scope.selectedPanel.model);
    $scope.numberPanels = Math.ceil(($scope.size * 1000) / $scope.panelPower);
    $scope.panelPrice = $scope.numberPanels * $scope.selectedPanel.price;
    $scope.totalMountPrice = ($scope.numberPanels * $scope.selectedBracket.price);
    $scope.inverterPrice = $scope.selectedInverter.price;
    
    var totalPrice = $scope.totalMountPrice + $scope.panelPrice + $scope.inverterPrice;
    console.log($scope.numberPanels);
    console.log($scope.panelPrice);
    console.log($scope.totalMountPrice);
    console.log($scope.inverterPrice);
    console.log(totalPrice);

}


// $scope.numberPanels="";
// $scope.panelPower = "";
// $scope.panelPrice ="";
// $scope.mountPrice ="";
// $scope.inverPrice = "";
// $scope.finalPrice = "";

//  $scope.calculateprice = function() {





// $scope.mountPrice = $scope.mounts.price;
// $scope.inverPrice = $scope.inver.price;

// $scope.finalPrice = $scope.panelPrice + $scope.mountPrice+ $scope.inverPrice

//  }












}); //the end do not delete