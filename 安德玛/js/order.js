$(function () {
    init();
})
function init() {
    //登录享受快捷结算
    btnUp();
    //表单验证
    form();
    //发票隐藏框
    bill();
    //提交订单并支付
    payBtn();
    //选择城市
    city();
}
//按钮上翻
function btnUp() {
    $(".section-account-content-title-btn").hover(
        function () {
            $(this).find("p").stop().animate({ top: -42 }, 200);
        },
        function () {
            $(this).find("p").stop().animate({ top: 0 }, 200);
        }
    )
}
//表单验证
function form() {
    //所有输入框获得焦点边框变色
    $("input").focus(function () {
        $(this).css("border", "1px solid black");
    })
    //验证姓名
    $(".user").blur(function () {
        var str = $(this).val();
        if (str.length < 2) {
            $(this).css("border", "1px solid red");
            $(this).next().html("请输入收件人的姓名").addClass("input-p");
        } else {
            $(this).next().html("");
        }
    })
    //验证手机号
    $(".tel").blur(function () {
        var s = /^1[345689]\d{9}/.test($(this).val());
        if (s == false) {
            $(this).css("border", "1px solid red");
            $(this).next().html("请输入正确的手机号码").addClass("input-p");
        } else {
            $(this).next().html("");
        }
    })
    //验证具体地址
    $(".sites").blur(function () {
        var str = $(this).val();
        if (str.length < 2) {
            $(this).css("border", "1px solid red");
            $(this).next().html("请输入详细地址").addClass("input-p");
        } else {
            $(this).next().html("");
        }
    })
    //邮箱
    $(".email").blur(function () {
        var m = /\d{6}/.test($("#text").val());
        if (m == false) {
            $(this).css("border", "1px solid red");
            $(this).next().html("请输入正确的电子邮箱").addClass("input-p");
        } else {
            $(this).next().html("");
        }
    })
}
// 发票隐藏框
function bill() {
    var count = 1;
    $(".bill").click(function () {
        count++;
        console.log(count % 2 == 0);
        if (count % 2 == 0) {
            $(".section-account-content-bill-hide").slideDown();
            add();
        } else {
            $(".section-account-content-bill-hide").slideUp();
            unde();
        }
    })
    $(".section-account-content-bill-hide>p span").click(function () {
        $(this).addClass("bill-bgc").siblings().removeClass("bill-bgc");
        var index = $(".section-account-content-bill-hide>p span").index($(this));
        if (index == 0) {
            $(".section-account-content-bill-mes").show();
            $(".section-account-content-bill-firm").hide();
        } else {
            $(".section-account-content-bill-mes").hide();
            $(".section-account-content-bill-firm").show();
        }
    })
}
//提交订单并支付
function payBtn() {
    $(".im").click(function () {
        $(".section-account-content-btn>span").toggle();
    })
    $(".section-account-content-payBtn").hover(
        function () {
            $(this).find("p").stop().animate({ top: -42 }, 200);
        },
        function () {
            $(this).find("p").stop().animate({ top: 0 }, 200);
        }
    )
}
//切换多选框图片
function add() {
    $(".bill").addClass("bill-checkbox-position");
}
function unde() {
    $(".bill").removeClass("bill-checkbox-position");
}
