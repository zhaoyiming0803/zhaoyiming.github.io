(function($){
	$.fn.a = function(){
		this.bind("submit",function(){
			var mark = true;
			$(".bv",this).each(function(){
				var $val = $(this).val();
				var reg = new RegExp($(this).attr("reg"));
				if($(this).is("[validate='true']")){
					if(reg.test($(this).val())){
						$(this).parent().addClass("focus").removeClass("error");
						mark = true;
						return true;
					}else{
						$(this).parent().addClass("error").removeClass("focus");
						mark = false;
						return false;
					}
				}
			})
			if($("#qr").val()&&$("#qr").val()==$(".bv:eq(1)").val()){
				$("#qr").parent().addClass("focus").removeClass("error");
				mark = true;
			}else{
				$("#qr").parent().addClass("error").removeClass("focus");
				mark = false;
			}
			return mark;
		})
	}
})(jQuery)