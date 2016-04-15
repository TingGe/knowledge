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
