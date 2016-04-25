/**
 * API模式:回调模式、配置对象、返回函数、柯里化
 */


/*
 * 回调模式
 * @param callback {Function or String} 回调方法或字符串
 * @param callback_obj {Object} 执行回调方法的对象
 */

var doSomething = function(callback, callback_obj) {
  var param = "params";
  if (typeof callback === "string") {
    callback = callback_obj[callback];
  }

  if (typeof callback === "function") {
    callback.call(callback_obj, param);
  }
};

// demo code
var myapp = {};
myapp.paint = function(param) {
  console.log("do myapp.paint: " + param);
};

doSomething("paint", myapp);

doSomething(function(param) {
  console.log("do callback: " + param);
}, this);


/**
 * 配置对象
 */
var addPerson = function(conf) {
  //接收并处理conf
};

var conf = {
  username: "batman",
  first: "Bruce",
  last: "Wayne"
};
addPerson(conf);


/*
 * 柯里化
 * 发现自己在调用同样的函数并且传入的参数大部分都相同的时候，就是考虑柯里化的理想场景了
 * @param fn {Function}
 */
function schonfinkelize(fn) {
  var slice = Array.prototype.slice,
    stored_args = slice.call(arguments, 1);
  return function() {
    var new_args = slice.call(arguments),
      args = stored_args.concat(new_args);
    return fn.apply(null, args);
  };
}

// demo
// 普通函数
function add(a, b, c, d, e) {
  return a + b + c + d + e;
}
// 参数个数可以随意分割
var schonfinkelize(add, 1, 2, 3)(5, 5); // 16
// 两步柯里化
var addOne = schonfinkelize(add, 1);
addOne(10, 10, 10, 10); // 41
var addSix = schonfinkelize(addOne, 2, 3);
addSix(5, 5); // 16
