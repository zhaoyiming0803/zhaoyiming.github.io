define(['app', 'indexController', 'listController', 'articleController'], function(app){
	return app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/index');
		$stateProvider.state('index', {
			url : '/index/{id}',
			templateUrl : './tpl/index.html',
			controller : 'ctr1'
		})
		.state('list', {
			url : '/list/{id}',
			templateUrl : './tpl/list.html',
			controller : 'ctr2'
		})
		.state('article', {
			url : '/article/{id}',
			templateUrl : './tpl/article.html',
			controller : 'ctr3'
		})
	}]);
});