/**
 * 作者：听歌
 * 电子邮件：505253293@163.com
 * 个人主页：https://github.com/TingGe
 * 页面加载后执行
 * @param fn {Function} 回调函数
 */
var domReady = function(fn) {
  var win, doc, add, done, e, init, modern, poll, pre, rem, top;
  win = window;
  doc = document;
  done = false;
  top = true;
  modern = doc.addEventListener;
  add = modern ? 'addEventListener' : 'attachEvent';
  rem = modern ? 'removeEventListener' : 'detachEvent';
  pre = modern ? '' : 'on';
  init = function(e) {
    if (e.type === 'readystatechange' && doc.readyState !== 'complete') {
      return;
    }
    (e.type === 'load' ? win : doc)[rem](pre + e.type, init, false);
    if (!done && (done = true)) {
      return fn.call(win, e.type || e);
    }
  };
  poll = function() {
    var e;
    try {
      docEle.doScroll('left');
    } catch (_error) {
      setTimeout(poll, 50);
      return;
    }
    return init('poll');
  };
  if (doc.readyState === 'complete') {
    return fn.call(win, 'lazy');
  } else {
    if (!modern && docEle.doScroll) {
      try {
        top = !win.frameElement;
      } catch (_error) {
        e = _error;
      }
      if (top) {
        poll();
      }
    }
    doc[add](pre + 'DOMContentLoaded', init, false);
    doc[add](pre + 'readystatechange', init, false);
    return win[add](pre + 'load', init, false);
  }
};
