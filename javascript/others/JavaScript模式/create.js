/**
 * 代码复用模式：现代继承模式(Object.create()、混元、借用、通过复制属性继承)、类式继承(Klass)
 */

/*
 * 现代继承模式(Object.create())
 */
if (typeof Object.create === "undefined") {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}


// demo
// 父构造函数
function Person() {
  // 自有属性
  this.name = "Adam";
}
// 原型上的属性
Person.prototype.getName = function() {
  return this.name;
};

// 使用Person()创建一个新对象
var papa = new Person();

// 继承
var kid = Object.create(papa);
// 测试：自有属性和原型上的属性都被继承了
kid.getName(); // "Adam"

// 继承
var kid = Object.create(Person.prototype);
typeof kid.getName; // "function"，因为它在原型中
typeof kid.name; // "undefined"，因为只有原型中的成员被继承了
