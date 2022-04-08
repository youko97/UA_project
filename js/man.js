// 图片背景色
$('.hot1-picture').css('background', '#f1f1f1');

//男子上装轮播图
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


// 男子下装轮播图
man_bottoms_Fs();

function man_bottoms_Fs() {
    var bannerBox = document.querySelector('#man-bottoms-hiden');
    var focus = document.querySelector('.hot1-fs');
    var focusWidth = focus.offsetWidth; // 获取图片宽度
    var arr_right = document.querySelector('#arr_right-bottoms');
    var arr_left = document.querySelector('#arr_left-bottoms');
    var imgs = document.querySelectorAll('.man-bottoms-modle');
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

// 男子鞋类轮播图
man_shoes_Fs();

function man_shoes_Fs() {
    var bannerBox = document.querySelector('#man-shoes-hiden');
    var focus = document.querySelector('.hot1-fs');
    var focusWidth = focus.offsetWidth; // 获取图片宽度
    var arr_right = document.querySelector('#arr_right-shoes');
    var arr_left = document.querySelector('#arr_left-shoes');
    var imgs = document.querySelectorAll('.man-shoes-modle');
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

// 男子配件轮播图
man_access_Fs();

function man_access_Fs() {
    var bannerBox = document.querySelector('#man-access-hiden');
    var focus = document.querySelector('.hot1-fs');
    var focusWidth = focus.offsetWidth; // 获取图片宽度
    var arr_right = document.querySelector('#arr_right-access');
    var arr_left = document.querySelector('#arr_left-access');
    var imgs = document.querySelectorAll('.man-access-modle');
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


// 按运动浏览
man_sports_Fs();

function man_sports_Fs() {
    var bannerBox = document.querySelector('#man-sports-hiden');
    var focus = document.querySelector('.hot1-fs');
    var focusWidth = focus.offsetWidth; // 获取图片宽度
    var arr_right = document.querySelector('#arr_right-sports');
    var arr_left = document.querySelector('#arr_left-sports');
    var img = document.querySelector('.hot1-picture');
    var imgWidth = img.offsetWidth;
    //点击右箭头，无缝滚动
    var num = 0;
    arr_left.style.display = 'none';
    bannerBox.style.width = bannerBox.offsetWidth + imgWidth + 'px'; //重新设置banner的宽度
    arr_right.onclick = function() {
        num++;
        if (num == 2) {
            arr_right.style.display = 'none';
            arr_left.style.display = '';

        }
        animate2(bannerBox, -num * (imgWidth + 16));


    }

    //点击左箭头，无缝滚动
    arr_left.onclick = function() {
        num--;
        if (num == 0) {
            arr_left.style.display = 'none';
            arr_right.style.display = '';
        }
        animate2(bannerBox, -num * (imgWidth + 16));
    }
}