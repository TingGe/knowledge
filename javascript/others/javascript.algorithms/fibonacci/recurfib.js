function recurFib(n) {
  if (n < 2) {
    return n;
  } else {
    return recurFib(n - 1) + recurFib(n - 2);
  }
}

document.write("递归算法(执行效率非常低)" + recurFib(10) + "<br>"); //将显示55
