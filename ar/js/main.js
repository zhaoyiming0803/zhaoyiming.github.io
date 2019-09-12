require.config({
	baseUrl : './util/',
	paths : {
		jquery : '../js/jquery',
		angular : '../js/angular.min',
		uiRouter : '../js/angular-ui-router',
		wrapController : './controllers/wrapController',
		indexController : './controllers/indexController',
		listController : './controllers/listController',
		articleController : './controllers/articleController',
		commonServer : './servers/commonServer'
	},
	shim : {
		angular : {
			exports : 'angular',
			deps : ['jquery']
		},
		uiRouter : {
			deps : ['angular'],
			exports : 'ui-router'
		},
		app : {
			deps : ['uiRouter']
		},
		router : {
			deps : ['app'],
		}
	}
});
require(['app', 'router', 'wrapController'], function(app){
	//angular.bootstrap方法是angular自带的，顾名思义，如果手工去调用，就是启动一个angular app的意思
	angular.bootstrap(document, ['app']);
});