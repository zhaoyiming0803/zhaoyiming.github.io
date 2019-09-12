var oPic,oLi,anniu,aLi,aLength,num,timer,oG,_index,oSpan;
window.onload = function(){
	oPic = document.getElementsByClassName("pic")[0];
	oLi = oPic.getElementsByTagName("li");
	anniu = document.getElementsByClassName("anniu")[0];
	aLi = anniu.getElementsByTagName("li");
	aLength = aLi.length;
	num = 0;
	oG = document.getElementsByClassName("g")[0];
	oSpan = oG.getElementsByTagName("span");
	oLeft = oSpan[0];
	oRight = oSpan[1];
	start();
	oG.onmouseover = end;
	oG.onmouseout = start;
	for(var j=0; j<aLength; j++){
		aLi[j].index = j;
		aLi[j].onmouseover = change;
	}
	oRight.onclick = time;
	oLeft.onclick = times;
}
//自动轮播开始或结束
function start(){
		timer = setInterval(time,2000);
		hide();
}
function end(){
	clearInterval(timer);
	show();
}
//图片切换++
function time(){
	for(var i=0; i<aLength; i++){
		oLi[i].style.display = "none";
		aLi[i].className = "";
	}
	num++;
	num = num % 4;
	oLi[num].style.display = "block";
	aLi[num].className = "on";
}
//图片切换--
function times(){
	for(var i=0; i<aLength; i++){
		oLi[i].style.display = "none";
		aLi[i].className = "";
	}
	num--;
	num = (num+4)%4;
	oLi[num].style.display = "block";
	aLi[num].className = "on";
}
//鼠标滑过按钮，图片轮播
function change(){
	_index = this.index;
	for(var k=0; k<aLength; k++){
		aLi[k].className = "";
		oLi[k].style.display = "none";
	}
	aLi[_index].className = "on";
	oLi[_index].style.display = "block";
}
//左右按钮显示或隐藏
function show(){
	oSpan[0].style.display = "block";
	oSpan[1].style.display = "block";
}
function hide(){
	oSpan[0].style.display = "none";
	oSpan[1].style.display = "none";
}