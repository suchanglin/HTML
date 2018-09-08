(function($) {
    var methods = {  // 方法对象
        init: function() {},  // 方法
        destory: function() {}  // 方法
    };
    $.fn.coolLightbox = function(method) {  // 参数为方法属性，init，destory
        if (methods[method]) {  // 是否存在方法
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            init.apply()
        } else if ($.type(method) === 'object') {  // 是否为单独对象传入
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method' + method + ' does not exist!');
        }
    };
})(jQuery);

$('.lightbox').coolLightbox('init', {    // 第二参数为对象，Array.prototype.slice.call(arguments, 1)方式获取
    p1: value1,                          // slice将arguments转为数组，即为['init',{p1: value1,p2: value2}]
    p2: value2
});


$('.lightbox').coolLightbox({  // 单独对象传入
    p1: value1,
    p2: value2
});


