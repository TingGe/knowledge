/**
 * 设计模式：遍历模式
 */

var each = function(arr, callback) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(arr[i], i, arr[i]);
  }
};

//比较函数
var compare = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error('arr1不等于arr2');
  }
  each(arr1, function(i, n) {
    //假如第一个数组当前的值，不等于对应下标的第二个数组的值，就抛出错误
    if (n !== arr2[i]) {
      throw new Error('arr1不等于arr2');
    }
  });
  console.log('arr1 === arr2');
};
compare([1, 2, 3], [1, 2, 3]); //输出：arr1 === arr2
compare([1, 2, 3], [1, 2, 4]); //输出：arr1不等于arr2
