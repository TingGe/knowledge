/**
* 代码复用模式：现代继承模式(Object.create()、混元、借用、通过复制属性继承)、类式继承(Klass)
 */

/*
 * 借用并绑定
 */
if (typeof Function.prototype.bind === "undefined") {
  Function.prototype.bind = function(thisArg) {
    var fn = this,
      slice = Array.prototype.slice,
      args = slice.call(arguments, 1);

    return function() {
      return fn.apply(thisArg, args.concat(slice.call(arguments)));
    };
  };
}

// demo
var twosay3 = one.say.bind(two, 'Enchanté');
console.log(twosay3()); // "Enchanté, another object"
