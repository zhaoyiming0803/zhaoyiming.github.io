define(['app', 'commonServer'], function(app, commonServer){
	return app.controller('ctr1', ['$scope', 'zymBlog', function($scope, zymBlog){
		//获取web网站数据
		zymBlog.webData().then(function(result){
			$scope.webdata = result;
		});
		//获取参数数据
		$scope.params = zymBlog.params();
	}]);
});