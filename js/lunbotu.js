//海报大轮播图
bigBanner();

function bigBanner() {
    var bannerBox = document.querySelector('.banner-father');
    var focus = document.querySelector('.banner-sf');
    var focusWidth = focus.offsetWidth; // 获取图片宽度
    var spans = document.querySelectorAll('.circle');
    var arrow_right = document.querySelector('.arrow_right');
    var imgs = document.querySelectorAll('.img');

    // focus.addEventListener('mouseenter', function() {
    //     clearInterval(timer);
    // });
    // focus.addEventListener('mouseleave', function() {
    //     timer = setInterval(function() {
    //         arrow_right.click();
    //     }, 2000)
    // });

    // 点击圆点事件
    function circles() {
        for (var i = 0; i < spans.length; i++) {
            spans[i].setAttribute('index', i); //给圆点设置下标
            spans[0].className = 'bai';
            spans[i].addEventListener('mouseover', function() {
                for (var i = 0; i < spans.length; i++) {
                    spans[i].className = '';
                }
                this.className = 'bai';
                var index = this.getAttribute('index');
                num = index;
                circle = index;
                animate(bannerBox, focusWidth * -index);

            });
        }
    }
    circles();

    //点击右箭头，无缝切换图片
    var num = 0;
    var circle = 0;
    bannerBox.style.width = bannerBox.offsetWidth + focusWidth + 'px'; //重新设置banner的宽度
    arrow_right.addEventListener('click', function() {
        if (num == imgs.length - 1) {
            bannerBox.style.left = 0;
            num = 0;
        }
        num++;
        animate(bannerBox, -num * focusWidth);
        circle++;
        if (circle == spans.length) {
            circle = 0;
        }
        for (var i = 0; i < spans.length; i++) {
            spans[i].className = '';
        }
        spans[circle].className = 'bai';
    });


    var timer = setInterval(function() {
        arrow_right.click();
    }, 4000);
}



// 首页新品推荐轮播图
newFs();

function newFs() {
    var bannerBox = document.querySelector('.bottom-father');
    var focus = document.querySelector('.bottom-box');
    var focusWidth = focus.offsetWidth; // 获取图片宽度
    var arr_right = document.querySelector('.arr_right');
    var arr_left = document.querySelector('.arr_left');
    var imgs = document.querySelectorAll('.imgs');
    //点击右箭头，无缝滚动
    var num = 0;
    bannerBox.style.width = bannerBox.offsetWidth + focusWidth + 'px'; //重新设置banner的宽度
    arr_right.onclick = function() {
        if (num == imgs.length - 1) {
            bannerBox.style.left = 0;
            num = 0;
        }
        num++;
        animate2(bannerBox, -num * focusWidth);

    }

    //点击左箭头，无缝滚动
    arr_left.onclick = function() {
        if (num == 0) {
            num = imgs.length - 1;
            bannerBox.style.left = -num * focusWidth + 'px';
        }
        num--;
        animate2(bannerBox, -num * focusWidth);
    }
}


//首页人气推荐轮播图
hotFs();

function hotFs() {
    var bannerBox = document.querySelector('.hot1-fs-father');
    var focus = document.querySelector('.hot1-fs');
    var focusWidth = focus.offsetWidth; // 获取图片宽度
    var arr_right = document.querySelector('.hot1-arr_right');
    var arr_left = document.querySelector('.hot1-arr_left');
    var imgs = document.querySelectorAll('.img3');
    //点击右箭头，无缝滚动
    var num = 0;
    arr_left.style.display = 'none';
    bannerBox.style.width = bannerBox.offsetWidth + focusWidth + 'px'; //重新设置banner的宽度
    arr_right.onclick = function() {
        num++;
        if (num == 2) {
            arr_right.style.display = 'none';
            arr_left.style.display = '';
        }
        animate2(bannerBox, -num * focusWidth);
    }

    //点击左箭头，无缝滚动
    arr_left.onclick = function() {
        num--;
        if (num == 0) {
            arr_left.style.display = 'none';
            arr_right.style.display = '';
        }
        animate2(bannerBox, -num * focusWidth);
    }
}