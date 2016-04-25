/**
 * 用高阶函数动态创建代理
 */
//阶乘函数
var mult = function() {
  var a = 1;
  for (i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};
//加法函数
var plus = function() {
  var a = 0;
  for (i = 0, l = arguments.length; i < l; i++) {
    a = a + arguments[i];
  }
  return a;
};
//创建缓存代理工厂
var createProxyFctory = function(fn) {
  var cache = {};
  return function() {
    var args = Array.prototype.join.call(arguments, ',');
    for (args in cache) {
      return cache[args];
    }
    return cache[args] = fn.apply(this, arguments);
  };
};
var proxyMult = createProxyFctory(mult);
var proxyPlus = createProxyFctory(plus);
console.log(proxyMult(1, 2, 3, 4)); //输出：24
console.log(proxyMult(1, 2, 3, 4)); //输出：24
console.log(proxyPlus(1, 2, 3, 4)); //输出：10
console.log(proxyPlus(1, 2, 3, 4)); //输出：10
