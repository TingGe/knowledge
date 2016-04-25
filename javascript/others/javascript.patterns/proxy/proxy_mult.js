/**
 * 缓存代理
 */
var mult = function() {
  var a = 1;
  for (i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
};
var proxyMult = (function() {
  var cache = {};
  return function() {
    //调用数组原型的join方法，将arguments转化为字符串
    var args = Array.prototype.join.call(arguments, ',');
    //遍历cache对象，如果有其属性则直接返回值
    for (args in cache) {
      return cache[args];
    }
    //没有，则计算数值并赋给cache对象
    console.log(mult.apply(this, arguments));
    return cache[args] = mult.apply(this, arguments);
  };
})();
proxyMult(1, 2, 3, 4); //输出：24
proxyMult(1, 2, 3, 4); //输出：24
