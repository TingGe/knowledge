/**
 * 代码复用模式：现代继承模式(Object.create()、混元、借用、通过复制属性继承)、类式继承(Klass)
 */

/*
 * 现代继承模式(Object.create())
 */
if (typeof Object.create === "undefined") {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

/*
 * 深层拷贝
 */

var deepCopy = function(obj) {
  var newobj = {};
  if (window.JSON) {
    newobj = JSON.parse(JSON.stringify(obj));
  } else if (typeof Object.create === "function") {
    newobj = new Objec.create(obj)
  }
  return newobj;
}
