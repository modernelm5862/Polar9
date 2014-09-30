function CartController($scope) {
    $scope.items = [
    {title: 'AngularJS Book', quantity: '8', price: 11.19},
    {title: 'Bootstrap Site Blueprints', quantity: '2', price: 27.99},
    {title: 'Step by Step Bootstrap 3', quantity: '4', price: 11.81}
    ];

    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
    }
}
console.log ("Hello");