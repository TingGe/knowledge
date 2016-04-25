var strategies = {
  'S': function(salary) {
    return salary * 4;
  },
  'A': function(salary) {
    return salary * 3;
  },
  'B': function(salary) {
    return salary * 2;
  }
};
var calculateBonus = function(level, salary) {
  return strategies[level](salary);
};
console.log(calculateBonus('S', 4000)); //输出：16000
console.log(calculateBonus('A', 4000)); //输出：12000
