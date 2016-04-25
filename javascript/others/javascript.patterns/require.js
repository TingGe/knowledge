/**
 * DOM和浏览器中的模式：部署JavaScript —— 按需加载
 */

function require(file, callback) {
  var script = document.getElementsByTagName('script')[0],
    newjs = document.createElement('script');
  // IE
  newjs.onreadystatechange = function() {
    if (newjs.readyState === 'loaded' || newjs.readyState === 'complete') {
      newjs.onreadystatechange = null;
      callback();
    }
  };
  // 其它浏览器
  newjs.onload = function() {
    callback();
  };
  newjs.src = file;
  script.parentNode.insertBefore(newjs, script);
}
