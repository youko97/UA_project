$(function() {
    inits();
})

function inits() {
    //切换大图
    cutImg();
    //鞋子尺码
    shoeSize();
    //鞋子数量
    shoeNum();
    //鞋子购买
    shoeBuy();
    //鞋子尺码表函数
    shoeTable();
    //人气商品
    popular();
    //回到顶部
    toTop();
}
//切换大图函数
function cutImg() {
    //当小图被点击时
    $(".section-max-page-content-img li").click(function() {
        //储存图片
        var maxImgArray = [
                "./images/16201081294785594_DEFAULT.png",
                "./images/16093177806562867_DEFAULT.png",
                "./images/1609317779992641_DEFAULT.png",
                "./images/16201081309211655_DEFAULT.png",
                "./images/16201081300907569_DEFAULT.png"
            ]
            //获得被点击下标
        var _index = $(".section-max-page-content-img li").index(this);
        //更改被点击小图边框
        $(this).addClass("img-border").siblings().removeClass("img-border");
        //更改被点击大图
        $(".section-max-img img").attr("src", maxImgArray[_index]);
        //删除详情图
        $(".section-product-img ul").empty();
        //调用详情图换图函数 传参下标
        cutParticulars(_index);
    })
}
//点击尺码数字
function shoeSize() {
    $(".section-max-page-content-size li").click(function() {
        $(".section-max-page-content-table-num").html($(this).html());
        $(this).addClass("img-border").siblings().removeClass("img-border");
    })
}
//点击加减
function shoeNum() {
    var _count = 1;
    $(".section-max-page-content-minus").unbind("click").click(minus);
    $(".section-max-page-content-plus").unbind("click").click(plus);
    //减函数
    function minus() {
        _count--;
        if (_count > 1) {
            //当数量大于1 加号移除禁用 添加鼠标小手图标 绑定点击事件
            $(".section-max-page-content-plus").removeClass("num-background").addClass("num-pointer").unbind("click").bind("click", plus);
        } else {
            _count = 1;
            //当前等于1时 移除小手 添加禁用 解绑定点击事件
            $(this).removeClass("num-pointer").addClass("num-background").unbind("click");
        }
        $(".section-max-page-content-amount").html(_count);
    }
    //加函数
    function plus() {
        _count++;
        if (_count < 5) {
            //当数量小于5 减号移除禁用 添加鼠标小手图标 绑定点击事件
            $(".section-max-page-content-minus").removeClass("num-background").addClass("num-pointer").unbind("click").bind("click", minus);
        } else {
            _count = 5;
            //当前等于5时 移除小手 添加禁用 解绑定点击事件
            $(this).removeClass("num-pointer").addClass("num-background").unbind("click");
        }
        //更改数量
        $(".section-max-page-content-amount").html(_count);
    }

}
//鞋子购买函数
function shoeBuy() {
    $(".section-max-page-content-total div").hover(function() {
        enterUp(this);
    }, function() {
        leaveDown(this);
    })
}
//尺码表函数
function shoeTable() {
    //背景颜色颜色
    $(".section-size-specification div p span").addClass("table-evenClass");
    $(".section-size-specification-table p:odd span,.section-size-specification-table-th span:nth-of-type(2)").addClass("table-oddClass");
    //鼠标悬浮尺码表函数
    $(".section-size-specification-table span").hover(
        function() {
            //横向下标
            var _indexX = $(".section-size-specification-table p").index($(this).parent());
            //纵向下标
            var _indexY = $(this).parent().children().index($(this));
            //给当前元素前面的所有兄弟节点添加上下边框
            $(this).addClass("table-addclass").prevAll().addClass("table-TBborder");
            //对应横向标题加上下边框
            $(".section-size-specification-table-th span").eq(_indexX).addClass("table-TBborder");
            //找到当前元素父元素前面的兄弟节点,找到他们中对应下标加1的span节点 添加左右边框
            $(this).parent().prevAll().find("span:nth-of-type(" + (_indexY + 1) + ")").addClass("table-LRborder");
        },
        function() {
            //鼠标离开 移除追加的背景颜色
            $(this).removeClass("table-addclass");
            //移除所有的边框
            $(".section-size-specification span").removeClass("table-LRborder table-TBborder")
        })
    $(".section-size-specification-table").scroll(function() {
        var p = $(".section-size-specification-table").find("p span:first-of-type");

    })
}
//回到顶部 显示顶部隐藏框
function toTop() {
    window.onscroll = function() {
        //当滚动轴距离顶部600以内
        if ($(window).scrollTop() < 600) {
            //回到顶部按钮隐藏
            $("#toTop").stop().hide();
            //头部显示
            $("header").stop().show();
            //顶部隐藏框隐藏
            $(".topHide").stop().animate({ top: -100 }, 30);
            //当滚动轴距离顶部大于600
        } else if ($(window).scrollTop() > 600) {
            //回到顶部按钮显示
            $("#toTop").stop().show();
            //顶部隐藏框向下显示
            $(".topHide").stop().animate({ top: 0 }, 30);
            //头部隐藏
            $("header").stop().hide();
        }
        //点击回到顶部 滚动轴距离顶部的距离为0
        $("#toTop").click(function() {
            $(window).scrollTop(0);
        })
    }
}
//切换详情图
function cutParticulars(index) {
    //粗存图片和视频
    var particularsArray = [

        ],
        [
            "./images/shoe01.png",
            "./images/shoe02.png",
            "./images/shoe03.png",
            "./images/shoe04.png",
            "./images/shoe05.png" [
                "./images/shoe11.mp4",
                "./images/shoe12.png",
                "./images/shoe13.png",
                "./images/shoe14.png",
                "./images/shoe15.png",
                "./images/shoe16.png"
            ],
            [
                "./images/shoe21.png",
                "./images/shoe22.png",
                "./images/shoe23.png",
                "./images/shoe24.png",
                "./images/shoe25.png"
            ],
            [
                "./images/shoe31.png",
                "./images/shoe32.png",
                "./images/shoe33.png",
                "./images/shoe34.png",
                "./images/shoe35.png"
            ],
            [
                "./images/shoe41.png",
                "./images/shoe42.png",
                "./images/shoe43.png",
                "./images/shoe44.png",
                "./images/shoe45.png"
            ],
        ]
        //通过下标获取对应数组
    for (var i = 0; i < particularsArray[index].length; i++) {
        //判断数据类型
        var _str = (particularsArray[index][i].split("."))[2];
        //当数据类型时图片时
        if (_str == "png") {
            //创建li img
            var $nodes = $("<li></li>");
            var $node = $("<img></img>");
            $(".section-product-img ul").append($nodes);
            $nodes.append($node);
            //设置img图片路径
            $node.attr("src", particularsArray[index][i]).css("width", "100%");
        } else {
            //创建li video source
            var $nodes = $("<li></li>");
            var $node = $("<video></video>");
            var $source = $("<source></source>");
            $(".section-product-img ul").append($nodes);
            $nodes.append($node);
            $node.append($source);
            //设置video属性
            $node.attr({ "controlsList": "nofullscreen", "controls": "controls", "width": "100%" });
            //设置视频路径
            $source.attr({ "src": particularsArray[index][i], "type": "video/mp4" });
        }
    }
}
//人气商品
function popular() {
    //鼠标悬浮人气商品
    $(".section-Popular-goods li").hover(function() {
            //高度宽度各加20
            var _width = $(this).find("img").width() + 20;
            var _height = $(this).find("img").height() + 20;
            //图片的位置向左向上各-10
            $(this).find("img").stop().animate({ width: _width, height: _height, top: -10, left: -10 }, 300);
        }, function() {
            //高度宽度各减20
            var _width = $(this).find("img").width() - 20;
            var _height = $(this).find("img").height() - 20;
            //图片位置向左向上各加10
            $(this).find("img").stop().animate({ width: _width, height: _height, top: +10, left: +10 }, 300);
        })
        //点击左右
    $(".section-Popular-goods-left").click(function() {
        var _left = parseInt($(".section-Popular-goods ul").css("left")) - 1320;
        console.log(_left);
        $(".section-Popular-goods ul").stop().animate({ left: _left }, 300);
    });
    $(".section-Popular-goods-right").click(function() {
        var _left = parseInt($(".section-Popular-goods ul").css("left")) + 1320;
        $(".section-Popular-goods ul").stop().animate({ left: _left }, 300);
    });
}