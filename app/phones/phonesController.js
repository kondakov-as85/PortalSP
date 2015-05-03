'use strict';

angular.module('myApp.phones', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phones', {
    templateUrl: 'phones/phones.html',
    controller: 'PhonesController'
  });
}])

.controller('PhonesController', function($scope) {
	$scope.phones = [{
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200,
        company: 'Nokia'
    },{
        name: 'Samsung Galaxy S 4',
        year: 2014,
        price: 400,
        company: 'Samsung'
    },{
        name: 'Mi 5',
        year: 2015,
        price: 300,
        company: 'Xiaomi'
    }];
    $scope.tablets = [{
        name: 'Samsung Galaxy Tab S4',
        year: 2014,
        price: 300,
        company: 'Samsung'
    },{
        name: 'LG G PAD 8.3',
        year: 2013,
        price: 180,
        company: 'LG'
    },{
        name: 'IdeaTab A8',
        year: 2014,
        price: 220,
        company: 'Lenovo'
    }];
  $scope.data = {};
  $scope.setFile = function () {
    if($scope.data.mode=='Tablets')
        return 'phones/tabletsList.html';
    else if($scope.data.mode=='Phones')
        return 'phones/phonesList.html';
};
  $scope.modes = [{
      value: 'Tablets',
      label: 'Планшеты'
  },{
      value: 'Phones',
      label: 'Смартфоны'
  }];
  $scope.data={visible : false};
});	