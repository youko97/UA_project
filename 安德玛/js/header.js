$(function () {
    init();
})
function init() {
    //调用全场在线满199免运费动画函数
    cartoon();
    //调用导航隐藏框
    nav();
    //搜索框变色效果
    search();
    //购物袋
    cart();
}
//全场在线满199免运费动画函数
function cartoon() {
    //得到全场在线满199免运费的宽度
    var _width = parseInt($(".header-cartoon").width());
    //最大偏移数据等于父元素宽度
    var max_left = $(".header-cartoon").parent().width();
    //设置偏移为父元素宽度
    $(".header-cartoon").css('left', max_left);
    //动画 偏移结果为盒子宽度的负数
    $(".header-cartoon").animate({ left: -_width }, 15000, cartoon);
}
//导航隐藏框
function nav() {
    //鼠标经过导航标签
    $(".header-ul>li").hover(
        function () {
            //获得下标
            var _index = $(".header-ul>li").index($(this));
            //得到对应的详情页
            var _this = $(".header-hunt-hidden").children().eq(_index);
            //详情页的其他兄弟元素隐藏
            _this.show().siblings().hide();
            //隐藏框显示
            show();
            //p标签集体上移
            enterUp(this);
            //隐藏的div(下边框)淡入
            $(this).children().eq(1).stop().fadeIn(500);
        },
        function(){
            //隐藏框隐藏
            hide();
            //p标签集体下移
            leaveDown(this);
            //隐藏的div(下边框)淡出
            $(this).children().eq(1).stop().fadeOut(500);
        } 
    )
    //鼠标经过隐藏框显示 离开隐藏
    $(".header-hunt-hidden").hover(show,hide);
}
//隐藏框显示函数
function show(){
    $(".header-hunt-hidden").stop().slideDown(300);
}
//隐藏框隐藏函数
function hide(){
    $(".header-hunt-hidden").stop().slideUp(300);
}
//搜索框 
function search(){
    //搜索框进入离开
    $(".header-hunt-search-i").mouseenter(function(){
        enterFadeOut(this);
    })
    $(".header-hunt input").mouseleave(function(){
        var _this = $(".header-hunt-search-i");
        leaveFadeIn(_this);
    })
    //关注
    $(".header-hunt-attention-i").hover(function(){
        enterFadeOut(this);
    },
    function(){
        leaveFadeIn(this);
    })
}
//进入淡出函数
function enterFadeOut(_this){
    //搜索框边框改变颜色
    $(_this).stop().fadeOut(200);
}
//离开淡入函数
function leaveFadeIn(_this){
    //恢复颜色
    $(_this).stop().fadeIn(200);
}
//p标签上移函数
function enterUp(_this){
    $(_this).find("p").stop().animate({"top":-45},300);
}
//p标签下移函数
function leaveDown(_this){
    $(_this).find("p").stop().animate({"top":0},300);
}
//购物袋
function cart(){
    //进入购物袋图标显示购物袋
    $(".header-hunt-cart").mouseenter(function(){
        //宽度变432
        $(".header-hunt-cart-box").animate({"width":432},200);
    })
    //点击购物袋关闭按钮 隐藏购物袋
    $(".header-hunt-cart-box-btn").click(function(){
        $(".header-hunt-cart-box").animate({"width":0},200);
    })
    //悬浮查看购物袋
    $(".header-hunt-cart-box-content-btn").hover(function(){
        enterUp(this);
    },function(){
        leaveDown(this);
    });
    //点击删除商品
    $(".header-hunt-cart-box-content-del").click(function(){
        $(".header-hunt-cart-box-content").html("您的购物袋为空").addClass("del");
    })
}

