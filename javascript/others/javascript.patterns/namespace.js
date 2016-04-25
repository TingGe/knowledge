/**
 * 对象创建模式：命名空间模式 ＋ 依赖声明模式、沙箱模式、method()方法
 */


 /*
  * 命名空间模式
  */
var MYAPP = MYAPP || {};
MYAPP.namespace = function(ns_string) {
  var parts = ns_string.split('.'),
    parent = MYAPP,
    i;

  // 去除不必要的全局变量层
  // 译注：因为namespace已经属于MYAPP
  if (parts[0] === "MYAPP") {
    parts = parts.slice(1);
  }

  for (i = 0; i < parts.length; i += 1) {
    // 如果属性不存在则创建它
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
};

// demo
// 将返回值赋给本地变量
var module2 = MYAPP.namespace('MYAPP.modules.module2');
module2 === MYAPP.modules.module2; // true

// 省略全局命名空间`MYAPP`
MYAPP.namespace('modules.module51');

// 长命名空间
MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');
