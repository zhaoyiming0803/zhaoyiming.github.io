$(function(){
	//鼠标滑过切换
	var bannerNum = 0;
	var time = setInterval(bannerAutoPlay,3000);
	$('.btn li').mouseover(function(){
		var $index = $(this).index();
		bannerNum+=1;
		bannerNum = bannerNum%3;
		$(this).addClass('hov').siblings('li').removeClass('hov');
		$(".pic").stop(true).animate({marginTop:-300*bannerNum},'slow');
	})
	$('.banner').hover(function(){
		clearInterval(time);
	},function(){
		time = setInterval(bannerAutoPlay,3000);
	});
	function bannerAutoPlay(){
		bannerNum+=1;
		bannerNum = bannerNum%3;
		$('.btn li').eq(bannerNum).addClass('hov').siblings('li').removeClass('hov');
		$(".pic").stop(true).animate({marginTop:-300*bannerNum},'slow')
	}
	//打消疑虑文字显示隐藏
	$('.dispelDetail').hover(function(){
		$(this).find('p').show();
	},function(){
		$(this).find('p').hide();
	})
	//袋王相册
	$('.album').hover(function(){
		$(this).find('span').show();
	},function(){
		$(this).find('span').hide();
	})
	var num = 0;
	var picNum = Math.ceil($('.albumPic ul li').length/5);
	$('.aRight').click(function(){
		num+=1;
		num = num%picNum;
		$('.albumPic ul').stop(true).animate({marginLeft:-1100*num},'slow');
	});
	$('.aLeft').click(function(){
		num-=1;
		num = (num+picNum)%picNum;
		$('.albumPic ul').stop(true).animate({marginLeft:-1100*num},'slow');
	});
	//定制信息轮播
	var orderNum = 0;
	var orderListNum = Math.ceil($('.orderList ul li').length/10);
	var timer = setInterval(autoPlay,3000);
	$('.orderMessage').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,3000);
	});
	function autoPlay(){
		orderNum+=1;
		orderNum = orderNum%orderListNum;
		$('.orderList ul').stop(true).animate({marginTop:-305*orderNum},'slow');
	}
	//提交表单验证
	$('.inptCheck').blur(validate);
	function validate(){
		var $this = $(this);
		var $value = $this.val();
		var oReg = new RegExp($this.attr('reg'));
		if(!oReg.test($value)){
			alert($this.attr('place')+'格式不正确，请重新输入');
		}
	}
	$('.onlineMessage').keyup(function(){
		var $inptCheck = $(this).parents('p').find('.inptCheck');
		if(new RegExp($inptCheck.eq(0).attr('reg')).test($inptCheck.eq(0).val()) && new RegExp($inptCheck.eq(1).attr('reg')).test($inptCheck.eq(1).val()) && new RegExp($inptCheck.eq(2).attr('reg')).test($inptCheck.eq(2).val()) && $(this).val().length>10){
			$(this).parents('div').find('.coolbg').attr('disabled',false);
		}
	})
	//加入收藏
	function AddFavorite(sURL, sTitle) {
		sURL = encodeURI(sURL);
		try {
			window.external.addFavorite(sURL, sTitle);
		} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch (e) {
			alert("加入收藏失败,请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
			}
		}
	}
})