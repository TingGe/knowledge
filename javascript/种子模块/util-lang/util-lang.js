/**
 * 作者：听歌
 * 电子邮件：505253293@163.com
 * 个人主页：https://github.com/TingGe
 * 类型判断
 */

function isUndefined(undef) {
  return undef === undefined;
}

function isType(type) {
  return function(obj) {
    return Object.prototype.toString.call(obj) === "[object " + type + "]"
  }
}

var isObject = isType("Object");
var isString = isType("String");
var isArray = Array.isArray || isType("Array");
var isFunction = isType("Function");
var isNumber = isType("Number");
var isBoolean = isType("Boolean");
