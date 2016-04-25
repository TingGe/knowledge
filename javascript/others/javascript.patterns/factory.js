/**
 * 设计模式：工厂模式
 */

// 父构造函数
function CarMaker() {}

// 父构造函数的方法
CarMaker.prototype.drive = function() {
  return "Vroom, I have " + this.doors + " doors";
};

// 静态工厂方法factory
CarMaker.factory = function(type) {
  var constr = type,
    newcar;

  // 如果指定类型的构造函数不存在则报错
  if (typeof CarMaker[constr] !== "function") {
    throw {
      name: "Error",
      message: constr + " doesn't exist"
    };
  }

  // 现在我们确认要用到的构造函数是存在的了
  // 让它继承自父构造函数，但只继承一次
  if (typeof CarMaker[constr].prototype.drive !== "function") {
    CarMaker[constr].prototype = new CarMaker();
  }
  // 创建一个新实例
  newcar = new CarMaker[constr]();
  // 这里可以选择性地调用一些方法，然后返回实例
  return newcar;
};

// 创建特定类型的构造函数
CarMaker.Compact = function() {
  this.doors = 4;
};
CarMaker.Convertible = function() {
  this.doors = 2;
};
CarMaker.SUV = function() {
  this.doors = 24;
};

// demo
var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');
corolla.drive(); // "Vroom, I have 4 doors"
solstice.drive(); // "Vroom, I have 2 doors"
cherokee.drive(); // "Vroom, I have 24 doors"
