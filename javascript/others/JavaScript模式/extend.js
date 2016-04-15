/**
 * 代码复用模式：现代继承模式(Object.create()、混元、借用、通过复制属性继承)、类式继承(Klass)
 */

/*
 * 通过复制属性继承
 */

function extend(parent, child) {
  var i;
  child = child || {};
  for (i in parent) {
    if (parent.hasOwnProperty(i)) {
      child[i] = parent[i];
    }
  }
  return child;
}

function extendDeep(parent, child) {
  var i,
    toStr = Object.prototype.toString,
    astr = "[object Array]";

  child = child || {};
  for (i in parent) {
    if (parent.hasOwnProperty(i)) {
      if (typeof parent[i] === "object") {
        child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
        extendDeep(parent[i], child[i]);
      } else {
        child[i] = parent[i];
      }
    }
  }
  return child;
}
