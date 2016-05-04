function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

function fib(num){
  var f = fibs(), result = 0;
  for(var i = 0; i <= num; i++){
    result = f.next()
  }
  return result.value;
}
document.write(`ES6生成器：${fib(10)}<br>`); //将显示55
