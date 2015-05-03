'use strict';

angular.module('myApp.question', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/question', {
    templateUrl: 'question/question.html',
    controller: 'QuestionController'
  });
}]);

	