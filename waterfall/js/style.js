/*
	<div class="detail">
		<img src="images/1.jpg" width="263">
		<a href="#" class="dec">你们男神都爱的倪妮，就是个大写的美啊！</a>
		<div class="time">
			<p>2016/03/18 20:08</p>
			<a href="#">阅读全文</a>
		</div>
	</div>
*/
$(function(){
	var $wrap = $(".wrap");
	var $li = $(".wrap ul li");
	var $length = $li.length;
	var imgData;
	var num = 0;
	var _index = 0;
	for(var j=0; j<8; j++){
		show();
	}
	//页面向上滚动的时候不断的加载图片
	$(window).scroll(function(){
		var bH = $wrap.offset().top + $wrap.height() - $(window).scrollTop();
		if( bH < $(window).height() ){
			show();
		}
	})
	//通过ajax拿到后台数据
	function show(){
		$.ajax({
			url:"http://www.zhaoyiming.com/demo/waterfall/data.php",
			type:"POST",
			success:function(data){
				imgData = eval(data);
				var oDiv = createDiv(num);
				var i = getShort();
				$li.eq(i).append($(oDiv))
				$(oDiv).fadeIn(1000);
				num++;
			}
		})
	}
	//得到高度最短的那个li
	function getShort(){
		var a = 0;
		var fH = $li.eq(0).height();
		for(var i=1; i<$length; i++){
			var nH = $li.eq(i).height();
			if(nH<fH){
				fH = nH;
				a = i;
			}
		}
		return a;
	} 
	//创建元素
	function createDiv(i){
		var oDiv = document.createElement("div");
		oDiv.className = "detail";
		var oImg = new Image();
		oImg.src = imgData[i].src;
		oImg.width = "263";
		var oA = document.createElement("a");
		oA.href = "#";
		oA.className = "dec";
		oA.innerHTML = imgData[i].dec;
		var oDivs = document.createElement("div");
		oDivs.className = "time";
		var oP = document.createElement("p");
		oP.innerHTML = imgData[i].time;
		var oAs = document.createElement("a");
		oAs.href = "#";
		oAs.innerHTML = "阅读全文";
		oDiv.appendChild(oImg);
		oDiv.appendChild(oA);
		oDiv.appendChild(oDivs);
		oDivs.appendChild(oP);
		oDivs.appendChild(oAs);
		return oDiv;
	}
})