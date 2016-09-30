var app = angular.module('app', []);
app.controller('Todo', function($scope) {
    $scope.test = 3;

    $scope.getTotalTodos = function() {
      return $scope.todos.length;
    }

    $scope.todos = [
      {text:'First task', done:false},
      {text:'Second task', done:false}
    ];

    $scope.addTodo = function() {
      var newTodo = {
        text: $scope.formTodoText,
        done: false
      }
      $scope.todos.push(newTodo);
      $scope.formTodoText = "";
    }

    $scope.clearCompleted = function() {
      $scope.todos = _.filter($scope.todos, function(todo) {
        return !todo.done;
      });
    }
});
