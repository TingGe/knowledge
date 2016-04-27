function iterFib(n) {
  var last = 1;
  var nextlast = 1;
  var result = 1;
  for (var i = 2; i < n; ++i) {
    result = last + nextlast;
    nextlast = last;
    last = result;
  }
  return result;
}

document.write("迭代法（执行效率同动态规划）" + iterFib(10)); //将显示55
