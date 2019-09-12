define(['app', 'commonServer'], function(app, commonServer){
	return app.controller('ctr3', ['$scope', 'zymBlog', function($scope, zymBlog){
        //获取参数数据
		$scope.params = zymBlog.params();
        //获取语言数据
		zymBlog.languageData().then(function(result){
            $scope.languageData = result;
        });
        //编程语言默认是value为1
        $scope.lan = 1;
	}]);
});