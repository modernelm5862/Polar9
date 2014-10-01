console.log("HEY");

function checkboxController($scope) {
    $scope.CheckBoxStatus1 = true; //this will set the default up as a ticked box
    console.log("Initial starting position is at", $scope.CheckBoxStatus1);
    $scope.CheckBoxStatus2 = false; //this will set the default up as a ticked box
    console.log("Initial starting position is at", $scope.CheckBoxStatus2);
    $scope.CheckBoxStatus3 = null;
    console.log("Initial Starting position is at", $scope.CheckBoxStatus3);

}

