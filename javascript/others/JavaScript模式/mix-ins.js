/**
* 代码复用模式：现代继承模式(Object.create()、混元、借用、通过复制属性继承)、类式继承(Klass)
 */

 /*
  * 混元（Mix-ins）
  */
function mix() {
  var arg, prop, child = {};
  for (arg = 0; arg < arguments.length; arg += 1) {
    for (prop in arguments[arg]) {
      if (arguments[arg].hasOwnProperty(prop)) {
        child[prop] = arguments[arg][prop];
      }
    }
  }
  return child;
}
