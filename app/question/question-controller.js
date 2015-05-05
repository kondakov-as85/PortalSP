angular.module('myApp.question').controller('QuestionController', function($scope, $http/*questionService*/) {
    $scope.sortparam='-rate';
	//$scope.question=questionService.question;
    $scope.loaded = false;

    $scope.load = function () {
    $http.get('question.json').success(function(data) {
            $scope.question = data.question;
            $scope.loaded = true;
        });
        
    }
     
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