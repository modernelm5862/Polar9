var books = [
{id:'1', name:'This is going to be book 1'},
{id:'2', name:'This is going to be book 2'},
{id:'3', name:'This is going to be book 3'}];

function BookListController($scope) {
    $scope.books = books;

    $scope.insertBook = function() {
        $scope.books.splice(0, 0, {name:'This is the special book that is going to be inserted', id:'4'});
    };


    $scope.remove = function(index) {
        $scope.books.splice(index, 1);
    };
}
console.table(books);