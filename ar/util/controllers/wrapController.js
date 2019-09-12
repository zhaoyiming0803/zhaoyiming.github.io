define(['app', 'commonServer'], function(app){
	return app.controller('ctr', ['$scope', 'zymBlog', function($scope, zymBlog){
		//获取参数数据
		$scope.params = zymBlog.params();
	}]);
});