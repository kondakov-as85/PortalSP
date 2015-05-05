angular.module('myApp.question').factory('dataService', function () {
	return{
		question:{
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
	    }
	};
})