/**
 * 设计模式：外观模式
 */

// 将浏览器的差异隐藏在一个外观方法下面
var myevent = {
  stop: function(e) {
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
  }
};
