function StartUpController($scope) {

    $scope.computeNeeded = function() {
        $scope.needed = $scope.startingEstimate * 10;
    };

    $scope.requestFunding = function() {
        window.alert("Sorry, please enter a number!");
    };

    $scope.resetAll = function() {
        $scope.startingEstimate = 0;
        $scope.needed = 0;
    };
}

console.log("hey");