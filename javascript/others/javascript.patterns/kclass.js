/**
 * 代码复用模式：现代继承模式(Object.create())、类式继承(Klass)
 */

/*
 * 类式继承－－Klass
 */

var inherit = (function() {
  var F = function() {};
  return function(C, P) {
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
    C.prototype.constructor = C;
  }
}());

var klass = function(Parent, props) {
  var Child, F, i;
  // 1. 构造函数
  Child = function() {
    if (Child.uber && Child.uber.hasOwnProperty("__construct")) {
      Child.uber.__construct.apply(this, arguments);
    }
    if (Child.prototype.hasOwnProperty("__construct")) {
      Child.prototype.__construct.apply(this, arguments);
    }
  };
  // 2. 继承
  Parent = Parent || Object;
  inherit(Child, Parent);
  // 3. 添加方法实现
  for (i in props) {
    if (props.hasOwnProperty(i)) {
      Child.prototype[i] = props[i];
    }
  }
  // 返回“类”
  return Child;
};
