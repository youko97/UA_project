// 登录验证
// 绑定失去焦点
$("#iptPhone2").blur(function() {
	checkID(this);
})
$("#pwd").blur(function() {
	checkPwd(this);
})
// 提交表单调用验证函数
$("#myLoginForm").submit(function() {
	flag2 = true;
	if (!checkID()) flag2 = false;
	if (!checkPwd()) flag2 = false;
	return flag2;
})
// 验证手机号/邮箱
function checkID() {
	var $iptPhone2 = $("#iptPhone2");
	console.log($iptPhone2);
	var $PPhone2 = $("#PPhone2");
	if ($iptPhone2.val() == "") {
		$iptPhone2.next("p").text("请输入登录账号");
		return false;
	}
	return true;
}
// 密码
function checkPwd() {
	var $pwd = $("#pwd");
	var reg = /^\s*$/;
	if (reg.test($pwd.val())) {
		$pwd.next("p").text("密码不能为空")
		return false;
	}
	reg = /^[a-z0-9]{6}$/i;
	if (!reg.test($pwd.val())) {
		$pwd.next("p").text("密码由英文字母和数字组成的6位字符")
		return false;
	}
	$pwd.next("p").empty();
	return true;
}
