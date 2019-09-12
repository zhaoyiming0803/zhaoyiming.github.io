define(['app'], function(app){
	return app.factory('zymBlog', ['$http', '$stateParams', function($http, $stateParams){
		return {
            //web网站数据
			webData : function(){
				return $http({
					url : './php/webData.php',
					method : 'post'
				}).then(function(result){
					return result.data;
				});
			},
            //参数数据
			params : function(){
				return $stateParams;
			},
            //语言数据
            languageData : function(){
                return $http({
                    url : './php/languageData.php',
                    method : 'post'
                }).then(function(result){
                    return result.data;
                });
            },
            //邮箱数据
            emailData : function(){
                return $http({
                    url : './php/emailData.php',
                    method : 'post'
                }).then(function(result){
                    return result.data;
                });
            }
		}
	}]);
});