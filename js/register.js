	// 表单验证
	// 注册验证
	$(function() {
	    // 绑定失去焦点
	    // 手机号码
	    $("#iptPhone").blur(function() {
	        checkMobile(this);
	    })
	    $("#iptImg").blur(function() {
	        checkImg(this);
	        // alert(12);
	    })
	    $("#iptDx").blur(function() {
	            checkYZDX(this);
	        })
	        // 图形验证
	        // 验证码
	        // 提交表单调用验证函数
	    $("#myRegisterForm").submit(function() {
	            var flag1 = true;
	            if (!checkMobile()) flag1 = false;
	            if (!checkImg()) flag1 = false;
	            if (!checkYZDX()) flag1 = false;

	            return flag1;
	        })
	        // 验证手机号码
	    function checkMobile() {
	        var $iptPhone = $("#iptPhone");
	        // console.log($iptPhone);
	        var reg = /^\s*$/;
	        if (reg.test($iptPhone.val())) {
	            $iptPhone.next("p").text("请输入手机号");
	            return false;
	        }
	        reg = /^[0-9]{11}$/i;
	        if (!reg.test($iptPhone.val())) {
	            $iptPhone.next("p").text("手机号码不正确");
	            return false;
	        }
	        $iptPhone.next("p").empty();
	        return true;
	    }
	    // 验证图行验证
	    function checkImg() {
	        var $iptImg = $("#iptImg");
	        var $pImg = $("#pImg");
	        $pImg.html("");
	        if ($iptImg.val() == "") {
	            $pImg.html("请输入图形验证码");
	            return false;
	        }
	        return true;
	    }
	    // 获取验证码
	    function checkYZDX() {
	        var $iptDx = $("#iptDx");
	        var $pDX = $("#pDX");
	        $pDX.html("");
	        if ($iptDx.val() == "") {
	            $pDX.html("请输入短信验证码");
	            return false;
	        }
	        return true;
	    }

	    // 模态框
	    var yinyinWidth = $(document.body).outerWidth(true);
	    var yinyinHeight = $(document.body).outerHeight(true);
	    $('.yinyin').css({ 'width': yinyinWidth, 'height': yinyinHeight });


	})