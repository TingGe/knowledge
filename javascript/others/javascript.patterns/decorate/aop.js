/**
 * 设计模式：装饰模式（AOP 实现）
 */

// 新增函数在原有函数前执行
var before = function(fn, beforefn) {
  return function() {
    beforefn.apply(this, arguments);
    return fn.apply(this, arguments);
  }
};

// 新增函数在原有函数后执行
var after = function(fn, afterfn) {
  return function() {
    fn.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  }
};

// demo
var a = before(function() {
  console.log(3);
}, function() {
  console.log(2);
});
a = before(a, function() {
  console.log(1);
});
a();
