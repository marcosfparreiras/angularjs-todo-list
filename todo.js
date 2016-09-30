var app = angular.module('app', []);
app.controller('Todo', function($scope) {
    $scope.test = 3;

    $scope.todos = [
      {text:'First task, done:false'},
      {text:'Second task, done:false'}
    ];
});
