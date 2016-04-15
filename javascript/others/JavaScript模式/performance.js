/**
 * 性能模式：记忆模式、重定义函数
 */

/*
 * 记忆模式
 */
var myFunc = function() {
  var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
    result;
  if (!myFunc.cache[cachekey]) {
    result = {};
    // ……复杂的计算……
    myFunc.cache[cachekey] = result;
  }
  return myFunc.cache[cachekey];
};
// 缓存
myFunc.cache = {};


/*
 * 重定义函数
 */
var scareMe = function() {
  console.info("Boo!");
  scareMe = function() {
    console.log("Double boo!");
  };
};

// 1. 添加一个新属性
scareMe.property = "properly";

// 2. 被赋值给一个不同名的变量
var prank = scareMe;

// 3. 作为方法使用
var spooky = {
  boo: scareMe
};

// 使用重定义函数
scareMe(); // Boo!
scareMe(); // Double boo!
console.log(scareMe.property); // undefined

// 使用新名字调用
prank(); // "Boo!"
prank(); // "Boo!"
console.log(prank.property); // "properly"

// 作为方法调用
spooky.boo(); // "Boo!"
spooky.boo(); // "Boo!"
console.log(spooky.boo.property); // "properly"

// 使用重定义函数
scareMe(); // Double boo!
scareMe(); // Double boo!
console.log(scareMe.property); // undefined
