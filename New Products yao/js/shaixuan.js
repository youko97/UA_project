$(function(){
	// 点击复选框
	$(".abc").change(function(){
		var str=`<em class="qwe"></em>`
		var str1=$(this).siblings("span").html();
		if($(this).prop("checked")==true){
			$('.yi').append(str);
			$(".qwe").html(str1);
			$(".qwe").eq(0).siblings().remove();
			var arr=$(this).parents(".list_li").siblings().children("input");
			for(var i=0;i<arr.length;i++){
				arr[i].checked=false;
			}
		} 
		// 点击复选框就出现的商品
		
	})
	// 点击短袖
	$(".duanxiuipt").click(function(){
		console.log(12);
		$(".duanxiu").show();
		$(".neiyi").show();
		$(".duanku").hide();
		$(".xiezi").hide();
		$(".wazi").hide();
		$(".jinshenku").hide();
		$(".bao").hide();
		$(".changxiu").hide();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	// 点击内衣
	$(".neiyiipt").click(function(){
		console.log(12);
		$(".duanxiu").hide();
		$(".neiyi").show();
		$(".duanku").hide();
		$(".xiezi").hide();
		$(".wazi").hide();
		$(".jinshenku").hide();
		$(".bao").hide();
		$(".changxiu").hide();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	// 点击长袖
	$(".changxiuipt").click(function(){
		console.log(12);
		$(".changxiu").show();
		$(".duanxiu").hide();
		$(".neiyi").hide();
		$(".duanku").hide();
		$(".xiezi").hide();
		$(".wazi").hide();
		$(".jinshenku").hide();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	// 点击短裤
	$(".duankuipt").click(function(){
		console.log(12);
		$(".changxiu").hide();
		$(".duanxiu").hide();
		$(".neiyi").hide();
		$(".duanku").show();
		$(".xiezi").hide();
		$(".wazi").hide();
		$(".jinshenku").hide();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	// 点击紧身裤
	$(".jinshenkuipt").click(function(){
		console.log(12);
		$(".changxiu").hide();
		$(".duanxiu").hide();
		$(".neiyi").hide();
		$(".duanku").hide();
		$(".xiezi").hide();
		$(".wazi").hide();
		$(".jinshenku").show();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	// 点击鞋子
	$(".xieziipt").click(function(){
		console.log(12);
		$(".changxiu").hide();
		$(".duanxiu").hide();
		$(".neiyi").hide();
		$(".duanku").hide();
		$(".xiezi").show();
		$(".wazi").hide();
		$(".jinshenku").hide();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	// 点击拖鞋
	$(".tuoxieipt").click(function(){
		console.log(12);
		$(".changxiu").hide();
		$(".duanxiu").hide();
		$(".neiyi").hide();
		$(".duanku").hide();
		$(".xiezi").hide();
		$(".wazi").hide();
		$(".jinshenku").hide();
		$(".bao").hide();
		$(".tuoxie").show();
	});
	// 点击包
	$(".baoipt").click(function(){
		console.log(12);
		$(".changxiu").hide();
		$(".duanxiu").hide();
		$(".neiyi").hide();
		$(".duanku").hide();
		$(".xiezi").hide();
		$(".wazi").hide();
		$(".jinshenku").hide();
		$(".bao").show();
		$(".tuoxie").hide();
	});
	// 点击袜子
	$(".waziipt").click(function(){
		console.log(12);
		$(".changxiu").hide();
		$(".duanxiu").hide();
		$(".neiyi").hide();
		$(".duanku").hide();
		$(".xiezi").hide();
		$(".wazi").show();
		$(".jinshenku").hide();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	// 点击xiushen
	$(".xiushenipt").click(function(){
		console.log(12);
		$(".changxiu").show();
		$(".duanxiu").hide();
		$(".neiyi").show();
		$(".duanku").hide();
		$(".xiezi").hide();
		$(".wazi").hide();
		$(".jinshenku").show();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	$(".kuansongipt").click(function(){
		console.log(12);
		$(".changxiu").hide();
		$(".duanxiu").show();
		$(".neiyi").hide();
		$(".duanku").show();
		$(".xiezi").hide();
		$(".wazi").hide();
		$(".jinshenku").hide();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	$(".paobuipt").click(function(){
		console.log(12);
		$(".changxiu").show();
		$(".duanxiu").show();
		$(".neiyi").show();
		$(".duanku").show();
		$(".xiezi").show();
		$(".wazi").hide();
		$(".jinshenku").show();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	$(".xiuxianipt").click(function(){
		console.log(12);
		$(".changxiu").show();
		$(".duanxiu").show();
		$(".neiyi").show();
		$(".duanku").show();
		$(".xiezi").show();
		$(".wazi").hide();
		$(".jinshenku").show();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
	$(".lanqiuipt").click(function(){
		console.log(12);
		$(".changxiu").hide();
		$(".duanxiu").show();
		$(".neiyi").hide();
		$(".duanku").hide();
		$(".xiezi").show();
		$(".wazi").hide();
		$(".jinshenku").show();
		$(".bao").hide();
		$(".tuoxie").hide();
	});
})