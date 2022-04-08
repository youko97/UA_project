function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10; //缓动动画公式 ：目标值减对象的左边距离除以10
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) { //回调函数
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 25);
}