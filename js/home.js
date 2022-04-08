$(function() {
    //显示头部下拉导航栏
    $('.menu-tab>li').mouseenter(function() {
        $(this).find('.sub-menu').stop().slideDown(480);
    }).mouseleave(function() {
        $(this).find('.sub-menu').stop().slideUp(20);
    });

    //标题下划线移动
    $(".line2").mouseenter(function() {
        $widths = $(this).width();
        $(this).append('<div></div>');
        $(this).find('div').animate({ width: $widths }, 340);
    }).mouseleave(function() {
        $(this).find('div').animate({ right: -$widths }, 340, function() {
            $(this).remove();
        });
    });

    //顶部购物袋
    var window_height = $(document).height();
    var shop_width = $(".shop-cont").width();
    var musk_width = $(document).width();
    var musk_height = $(document).height();
    $(".shop-musk").css({ 'width': musk_width, 'height': musk_height });
    $(".shop-cont").css('height', window_height);
    $(".shop-box").mouseenter(function() {
        $(".shop-cont").show().animate({ marginRight: shop_width }, 250, function() {
            $(".shop-musk").fadeIn(150);
        });

    });
    // 显示购物车和遮罩层
    $(".car-close").click(function() {
        $(".shop-cont").animate({ marginRight: -shop_width }, 200, function() {
            $(".shop-cont").hide();
        });
        $(".shop-musk").fadeOut(150);
    });
    $(".shop-musk").click(function() {
        $(".shop-cont").animate({ marginRight: -shop_width }, 200, function() {
            $(".shop-cont").hide();
        });
        $(".shop-musk").fadeOut(150);
    });


    //图片放大效果
    $('.picture-scale').mouseenter(function() {
        $(this).find('img').css({ 'transform': 'scale(1.1)', 'transition': '.9s' });
    }).mouseleave(function() {
        $(this).find('img').css({ 'transform': 'scale(1)', 'transition': '.9s' });
    });



    //微信显示
    $('.foot2-flow li:last-of-type').mouseenter(function() {
        $(this).find('img').stop().fadeIn(200);
    }).mouseleave(function() {
        $(this).find('img').stop().fadeOut(200);
    });


    //返回顶部按钮
    $(window).scroll(function() {
        if ($(window).scrollTop() < 500) {
            $("#toTop").stop().fadeOut(200);
        }
        if ($(window).scrollTop() > 500) {
            $('.newProducts').animate({ top: -120 }, 800);
            $("#toTop").stop().fadeIn(200);
        }
        if ($(window).scrollTop() > 1000) {
            $('#man-tops').animate({ top: -80 }, 800);
            $('.new2').animate({ top: -130 }, 800);
        }
        if ($(window).scrollTop() > 1200) {
            $('.new3').animate({ top: -130 }, 700);
        }
        if ($(window).scrollTop() > 1700) {
            $('#man-bottoms').animate({ top: -100 }, 800);
        }
        if ($(window).scrollTop() > 2600) {
            $('#man-shoes').animate({ top: -150 }, 800);
        }
        if ($(window).scrollTop() > 3600) {
            $('.hotProducts').animate({ top: -225 }, 800);
        }
        if ($(window).scrollTop() > 4500) {
            $('.hot2-bottom').animate({ top: -100 }, 600);
        }

    });
    //当点击跳转链接后，回到页面顶部位置
    $("#toTop").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
        return false;
    });
});