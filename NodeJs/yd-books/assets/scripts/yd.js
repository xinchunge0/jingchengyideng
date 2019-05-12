//全局帮助的类库
function yd() { }
yd._version = 0.1;
yd.throttle = function (fn, wait) {
    var timer;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => timer = null, wait);
            return fn.apply(this, args);
        }
    }
}
//函子redux 基础应用 纯函数。。。