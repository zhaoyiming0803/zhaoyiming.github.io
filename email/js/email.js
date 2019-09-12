$(function(){
	$(".inputBox input").focus(function(){
		$(this).parent().addClass("focus").removeClass("error");
	}).blur(function(){
		var oVal = $(this).val();
		var oReg = new RegExp($(this).attr("reg"));
		if(oReg.test($(this).val())){
			$(this).parent().addClass("focus").removeClass("error");
		}else{
			$(this).parent().addClass("error").removeClass("focus");
		}
	})
})