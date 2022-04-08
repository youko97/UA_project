//点击获取验证码 出现倒计时
window.onload=function(){
	// 获取
	var button=document.getElementById("button");
	// console.log(button);
	// 获取手机号
	// var iptPhone=document.getElementById("iptPhone");
	var iptPhone=$("#iptPhone");
	// console.log(iptPhone);
	button.innerText = "获取验证码";
	var timer = null;
	button.onclick = function() {
		if(iptPhone.val().length==0){
			console.log(12);
			iptPhone.next("p").text("请输入手机号");
			return false;
		}else{
			clearInterval(timer); //这句话至关重要
			var time = 60;
			var that = this; //习惯
			timer = setInterval(function() {
				// console.log(time);
				if (time <= 0) {
					that.innerText = "";
					that.innerText = "点击重新发送";
					that.disabled = false;
				} else {
					that.disabled = true;
					that.innerText = "";
					that.innerText = "剩余时间" + (time) + "秒";
					time--;
				}
			}, 1000);
		}
		
	}
}

