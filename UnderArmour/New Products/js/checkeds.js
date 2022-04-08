//默认展开
// $("#shangpinLeixin").show();
$("#shangpinChaijian").show();
// $(".list_dl>.list_dd").eq(0).show();
$(".list_dt").on("click", function() {
	$('.list_dd').stop();
	$(this).siblings("dt").removeAttr("id");
	if ($(this).attr("id") == "open") {
		$(this).removeAttr("id").siblings("dd").slideUp();
	} else {
		$(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
	}
});
