/**
 * 设计模式：遍历模式(外部迭代器)
 */

var iterator = function(obj) {
  var current = 0;
  //下一个
  var next = function() {
    current += 1;
  };
  //是否完成
  var isDone = function() {
    return current >= obj.length;
  };
  //获得当前的值
  var getCurrItem = function() {
    return obj[current];
  };
  //返回接口
  return {
    next: next,
    isDone: isDone,
    getCurrItem: getCurrItem
  };
};

//比较函数
var compare = function(iterator1, iterator2) {
  //如果2个迭代器都未完成则继续
  while (!iterator1.isDone() && !iterator2.isDone()) {
    //如果2个迭代器当前的值不等则抛出错误
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      throw new Error('iterator1 !== iterator2');
    }
    iterator1.next();
    iterator2.next();
  }
  //跑到这里来，说明是相等的
  console.log('iterator1 === iterator2');
};
var iterator1 = iterator([1, 2, 3]);
var iterator2 = iterator([1, 2, 3]);
compare(iterator1, iterator2); //输出：iterator1 === iterator2
