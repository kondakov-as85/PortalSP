'use strict';

angular.module('myApp.question', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/question', {
    templateUrl: 'question/question.html',
    controller: 'QuestionController'
  });
}])

.controller('QuestionController', function($scope) {
    $scope.sortparam='-rate';
	$scope.question={
        text: 'Какой js-фреймворк лучше использовать?',
        author: 'Иван Иванов',
        date: '20/10/2013',
        answers: 
        [{
            text: 'AngularJS!',
            author: 'Вова Сидоров',
            date: '20/10/2014',
            rate:2
        },{
            text: 'AngularJS лучше всех',
            author: 'Олег Кузнецов',
            date: '20/10/2015',
            rate:0
        },{
            text: 'Я бы использовал knockout',
            author: 'Неизвестный',
            date: '21/10/2016',
            rate:0
        },{
            text: 'бляхамуха',
            author: 'Неизвестный',
            date: '21/10/2016',
            rate:0
        }]
    },
     
    $scope.voteUp = function (answer){
        answer.rate++;
    };
    $scope.voteDown = function (answer){
        answer.rate--;
    };
    $scope.questColorClass= "questcolor";
    $scope.changeClass = function (e) {
         
        $scope.questColorClass = e.type == "mouseover" ? "questselectedcolor" : "questcolor";
    }
})

.filter('formatText', function(){
    return function(text){
        if (text.indexOf("бляхамуха")!==-1) {
            return "***МАТ ТРЕХЭТАЖНЫЙ***";
        }else{
            return text;
        }
    }
})

.controller('AnswerController',
    function AnswerController($scope){
        $scope.save = function (answer, answerForm) {
            if (answerForm.$valid) {
                alert(answer.author + ", ваш ответ сохранен");
            };
        };
    });	