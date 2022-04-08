$(function(){
	var shangpin1 = $(".shangpin1");
	var shangpinDa = $(".shangpinDa");
	var shangpImgs1=$(".shangpImgs1");
	var shangpImgs2=$(".shangpImgs2");
	var soucang2=$(".soucang2");//获取收藏
	shangpin1.mouseover(function(){
		$(this).addClass("shangpin1biankuang");
	});
	shangpin1.mouseout(function(){
		$(this).removeClass("shangpin1biankuang");
	});
	// 大图旁边的商品
	shangpinDa.mouseover(function(){
		$(this).addClass("shangpin1biankuang");
	});
	shangpinDa.mouseout(function(){
		$(this).removeClass("shangpin1biankuang");
	});
});