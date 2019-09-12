$(function(){
	function play(){
		var saleTime = new Date();
		var nowTime = new Date();
		//设置商品开抢的时间
		saleTime.setFullYear(2019);
		saleTime.setMonth(2);
		saleTime.setDate(15);
		saleTime.setHours(12);
		saleTime.setMinutes(0);
		saleTime.setSeconds(0);
		//设置时间差
		var s = (saleTime.getTime() - nowTime.getTime())/1000;
		var days = Math.floor(s/86400);
		var s2 = s - days*86400;//剩余多少秒
		var hours = Math.floor(s2/3600);
		var s3 = s - days*86400 - hours*3600;//剩余多少秒
		var minutes = Math.floor(s3/60);
		var s4 = s - days*86400 - hours*3600 - minutes*60;
		$(".countDown span").eq(0).html(days);
		$(".countDown span").eq(1).html(hours);
		$(".countDown span").eq(2).html(minutes);
		$(".countDown span").eq(3).html(s4);
	};
	play();
	var timer = setInterval(function(){
		play();
	},1000)
})