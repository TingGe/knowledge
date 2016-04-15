/**
 * 设计模式：单例模式
 */

// 将实例放到静态属性中
function Universe() {
  // 实例是否已经存在？
  if (typeof Universe.instance === "object") {
    return Universe.instance;
  }
  // 处理普通逻辑
  this.start_time = 0;
  this.bang = "Big";
  // 缓存实例
  Universe.instance = this;
  // 隐式return：
  // return this;
}

// 重写构造函数
function Universe() {
  var instance;
  Universe = function Universe() {
    return instance;
  };
  Universe.prototype = this;
  instance = new Universe();
  instance.constructor = Universe;

  instance.start_time = 0;
  instance.bang = "Big";
  return instance;
}

// 将构造函数和实例包在一个即时函数中
var Universe;
(function() {
  var instance;
  Universe = function Universe() {
    if (instance) {
      return instance;
    }
    instance = this;
    // 功能代码
    this.start_time = 0;
    this.bang = "Big";
  };
}());
