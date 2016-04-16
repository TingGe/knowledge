/**
 * DOM和浏览器中的模式：部署JavaScript —— 预加载JavaScript
 */

var preload;
if ( /*@cc_on!@*/ false) { // IE支持条件注释
  preload = function(file) {
    new Image().src = file;
  };
} else {
  preload = function(file) {
    var obj = document.createElement('object'),
      body = document.body;

    obj.width = 0;
    obj.height = 0;
    obj.data = file;
    body.appendChild(obj);
  };
}
