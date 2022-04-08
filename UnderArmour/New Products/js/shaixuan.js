$(function(){
	$(".abc").change(function(){
		var str=`<em class="qwe"></em>`
		var str1=$(this).siblings("span").html();
		if($(this).prop("checked")==true){
			$('.yi').append(str);
			$(".qwe").html(str1);
			$(".qwe").eq(0).siblings().remove();
			$(this).find(".list_li").siblings("li").children("p").children("input").prop("checked")=false;
			
		} else{
			
		}
		
	})

})