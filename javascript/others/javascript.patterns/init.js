/**
 * 初始化模式：即时函数、对象即时初始化、条件初始化
 */

/*
 * 即时函数
 */
(function() {
  // 所有 module 的代码……
}());


/*
 * 对象即时初始化
 */
({
  maxwidth: 600,
  maxheight: 400,

  gimmeMax: function() {
    return this.maxwidth + "x" + this.maxheight;
  },

  init: function() {
    console.log(this.gimmeMax());
  }
}).init();


/*
 * 条件初始化
 */
var win = window,
  doc = document,
  utils = {
    addListener: null,
    removeListener: null
  };
if (typeof win.addEventListener === 'function') {
  utils.addListener = function(el, type, fn) {
    el.addEventListener(type, fn, false);
  };
  utils.removeListener = function(el, type, fn) {
    el.removeEventListener(type, fn, false);
  };
} else if (typeof doc.attachEvent === 'function') { // IE
  utils.addListener = function(el, type, fn) {
    el.attachEvent('on' + type, fn);
  };
  utils.removeListener = function(el, type, fn) {
    el.detachEvent('on' + type, fn);
  };
} else { // older browsers
  utils.addListener = function(el, type, fn) {
    el['on' + type] = fn;
  };
  utils.removeListener = function(el, type, fn) {
    el['on' + type] = null;
  };
}
