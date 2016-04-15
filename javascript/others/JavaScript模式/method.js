/**
 * 对象创建模式：命名空间模式 ＋ 依赖声明模式、沙箱模式、method()方法
 */

/*
 * method()方法
 */
if (typeof Function.prototype.method !== "function") {
  Function.prototype.method = function(name, implementation) {
    this.prototype[name] = implementation;
    return this;
  };
}

// demo
var Person = function(name) {
  this.name = name;
}.
method('getName', function() {
  return this.name;
}).
method('setName', function(name) {
  this.name = name;
  return this;
});

var a = new Person('Adam');
a.getName(); // 'Adam'
a.setName('Eve').getName(); // 'Eve'
