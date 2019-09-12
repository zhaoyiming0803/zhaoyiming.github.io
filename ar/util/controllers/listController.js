define(['app', 'commonServer'], function(app, commonServer){
	return app.controller('ctr2', ['$scope', 'zymBlog', function($scope, zymBlog){
        //获取网址参数
		$scope.params = zymBlog.params();
        //获取email数据
        zymBlog.emailData().then(function(result){
            $scope.emailData = result;
        });
        $scope.emailNum = '';
        //选择对应的邮箱
        var oUl = document.getElementsByTagName('ul')[0];
        $scope.chooseEmail = function(This){
            document.getElementById('userEmail').value = This.$parent.emailNum + This.v;
            oUl.style.display = 'none';
        }
        //邮箱信息显示,方法一如下，记得在input框中加入ng-change = "show();"
        /*$scope.show = function(This){
            var reg = new RegExp(/@/);
            if(!reg.test(This.emailNum) && This.emailNum.length>=1){
                oUl.style.display = 'block';
            }else{
                oUl.style.display = 'none';
                return;
            }
        }*/
        //邮箱信息显示,方法二如下，使用$watch监听input的value值变化
        $scope.$watch('emailNum', function(n, o){
            var reg = new RegExp(/@/);
            if(!reg.test(n) && n.length>=1){
                oUl.style.display = 'block';
            }else{
                oUl.style.display = 'none';
                return;
            }
        })
	}]);
});