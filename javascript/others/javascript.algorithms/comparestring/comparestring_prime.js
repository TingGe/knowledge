var numObject = {
  'A': 2,
  'B': 3,
  'C': 5,
  'D': 7,
  'E': 11,
  'F': 13,
  'G': 17,
  'H': 19,
  'I': 23,
  'J': 29,
  'K': 31,
  'L': 37,
  'M': 41,
  'N': 43,
  'O': 47,
  'P': 53,
  'Q': 59,
  'R': 61,
  'S': 67,
  'T': 71,
  'U': 73,
  'V': 79,
  'W': 83,
  'X': 89,
  'Y': 97,
  'Z': 101
};


var resultObject = {
  'result1': 1
};
var init = function(){
  compareStringByPrime('ABCDEFGHLMNOPQRS', 'DBGSRQPOZ');
};
var compareStringByPrime = function(str1, str2) {
  var i, j, flag, length;
  //长的字符串每个字母相乘
  for (i = 0, j = 1, length = str1.length; i < length; i++) {
    //相乘结果大于2的53次方时，设置新的属性值result+j来统计结果
    if (resultObject['result' + j] * numObject[str1.substr(i, 1)] > Math.pow(2, 53)) {
      j++;
      resultObject['result' + j] = 1;
    }
    resultObject['result' + j] *= numObject[str1.substr(i, 1)];
  }
  //结果除以短的字符串的每个字母
  for (i = 0, length = str2.length; i < length; i++) {
    flag = 0;
    for (var z in resultObject) {
      if (resultObject[z] % numObject[str2.substr(i, 1)] === 0) {
        flag = 0;
        break;
      } else {
        flag = 1;
      }
    }
    if (flag == 1) {
      console.log("str2中的第" + (i + 1) + "个字母" + str2.substr(i, 1) + "不存在str1中");
      break;
    } else if (flag == 0 && i == length - 1) {
      console.log("str2中的字母str1均存在");
    }
  }
};
init();
