$(function(){
	//电子邮箱
	$("#emails").blur(function() {
		checkEmail();
		// console.log(12);
	})
	//表单提交时验证
	$(".dingyue").click(function() {
		// console.log(122);
		var flag = true;
		//用户名
		if (!checkEmail()) flag = false;
		return flag;
	})
	// var $dingyue=$(".dingyue");
	// console.log($dingyue);
	// 邮箱验证
	function checkEmail() {
		var $emails = $("#emails");
		// var $emilDiv=$(".emilDiv");
		// var $emDiv=$("emDiv");
		// $emDiv.html("");
		var reg = /^\s*$/;
		if (reg.test($emails.val())) {
			$emails.next("div").text("请输入邮箱");
			// $emDiv.html("邮箱不能为空");
			return false;
		}
		reg = /^\w+@[a-z0-9]+(\.[a-z]{2,}){1,2}$/i;
		if (!reg.test($emails.val())) {
			// $emilDiv.css("boder","1px solid red");
			$emails.next("div").text("邮箱格式不正确");
			return false;
		}
		$emails.next("div").empty();
		return true;
	}
	
	// $(".dingyue").click(function() {
	// 	console.log(1);
	// 	var $emails = $("#emails");
	// 	if($emails.val().length==0){
	// 		$emails.next("div").text("请输入邮箱");
	// 		// $emDiv.html("邮箱不能为空");
	// 		return false;
	// 	}
	// })
	
	
})
