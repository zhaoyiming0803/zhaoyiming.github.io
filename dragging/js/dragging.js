/**
 * Description: 弹出框等元素拖拽类
 * User: zhaoyiming
 * Date: 2017/9/21
 */

;(function(global, oDoc, factory){

	typeof exports === 'object' && typeof module !== 'undefined'
	? module.exports = factory(oDoc)
	: typeof define === 'function' && define.amd
	? define([], function () {
		return factory(oDoc);
	})
	: (global.dragging = factory(oDoc));

})(window, document, function (oDoc) {
	'use strict';

	function Dragging (opt) {
		this.opt = opt;
	}

	Dragging.prototype.init = function () {
		var opt = this.opt,
			targetObj = oDoc.querySelector(opt.targetObj), // 鼠标按下的目标dom对象
			movingObj = oDoc.querySelector(opt.movingObj); // 外部移动的dom对象

		targetObj.style.cssText = 'cursor: move';

		targetObj.onmousedown = function(ev){
			var ev = ev || global.event,
				l = ev.clientX - movingObj.offsetLeft,
				t = ev.clientY - movingObj.offsetTop;
			
			oDoc.onmousemove = function(ev){
				var ev = ev || global.event;
				movingObj.style.left = ( ev.clientX - l ) + 'px';
				movingObj.style.top = ( ev.clientY - t ) + 'px';
			};
			
			oDoc.onmouseup = function(){
				this.onmousemove = null;
				this.onmouseup = null;
			};
		};
	};

	function dragging (opt) {
		new Dragging(opt).init();
	}

	return dragging;
});