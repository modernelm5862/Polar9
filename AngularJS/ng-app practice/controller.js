var myPracticeModule = angular.module('myPractice',[]);

myPracticeModule.controller('someText',

function ($scope) {
    var text = {};
    text.message = 'This is some text';
    $scope.text = text;
});