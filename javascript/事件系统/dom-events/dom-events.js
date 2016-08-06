/**
 * 初始化模式:条件初始化
 */

var win = window,
  doc = document;

var utils = {
  addListener: null,
  removeListener: null,
  stop: null
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

/**
 * 设计模式：外观模式
 */
// 将浏览器的差异隐藏在一个外观方法下面
utils.stop = function(e) {
  // 其它浏览器
  if (typeof e.preventDefault === "function") {
    e.preventDefault();
  }
  if (typeof e.stopPropagation === "function") {
    e.stopPropagation();
  }
  // IE
  if (typeof e.returnValue === "boolean") {
    e.returnValue = false;
  }
  if (typeof e.cancelBubble === "boolean") {
    e.cancelBubble = true;
  }
};


/*
* 事件监听器代码的另外一种写法
*/
var addListener;

if (window.addEventListener) {
  addListener = function(el, type, listener, useCapture) {
    el.addEventListener(type, listener, useCapture);
    return listener;
  };
} else if (window.attachEvent) {
  addListener = function(el, type, listener) {
    // 标准化this，event，target
    var wrapper = function() {
      var event = window.event;
      event.target = event.srcElement;
      listener.call(el, event);
    };

    el.attachEvent('on' + type, wrapper);
    return wrapper;
    // 返回wrapper。调用者可以保存，以后 remove
  };
}
