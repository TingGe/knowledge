/*
 * 带记忆功能的函数
 * memo {Array} 初始数组
 * fundamental {function}
 * return {Function}
 */
var memoizer = function(memo, fundamental) {
  var shell = function(n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fundamental(shell, n);
      memo[n] = result;
    }
    return result;
  };
  return shell;
};

// 斐波那契函数
var fibonacci = memoizer([0, 1], function(shell, n){
  return shell(n -1) + shell(n - 2);
});

document.write("斐波那契: " + fibonacci(10) + "<br>");

// 阶乘函数
var factorial = memoizer([1, 1], function(shell, n){
  return n * shell(n - 1);
});

document.write("阶乘: " + factorial(10));
