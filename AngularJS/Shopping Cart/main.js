function CartController($scope) {
    // this function which is called CartController, manages the logic of everything. $scope is passed in because it is needed to bind data elements to the UI
    $scope.items = [
    {title: 'AngularJS Book', quantity: '8', price: 11.19},
    {title: 'Bootstrap Site Blueprints', quantity: '2', price: 27.99},
    {title: 'Step by Step Bootstrap 3', quantity: '4', price: 11.81}
    ];
    // $scope is the part that is going to be outputted to the UI, the items is the name of the array. $scope.items is an array which is filled with dummy data so that the there is data available to be binded with, this is for demo purposes only and will need a server to communicate with in order for this to work correctly. This will be ammended in the future.

    $scope.remove = function(index) {
        $scope.items.splice(index, 1);
        // the remove function is screated so that it can be binded within the UI so this is added to $scope too. In this example, the remove() function can only delete items from the array. Because the list of divs are created with ng-repeat, they are data bound so the list will not have gaps in it when an item is removed. Also the remove() function is called everytime the button is clicked on.
    }
}
console.log ("Hello");