var numObject = {};
var init = function(){
  compareString('ABCDEFGHLMNOPQRS', 'DBGSRQPOZ');
};
var compareString = function(str1, str2) {
  var i,
    flag,
    length,
    strLong = 1, //默认str1为长字符串
    strShort = 2, //默认str2为短字符串
    strArray = [str1, str2];
  //当str1长度小于str2时
  if (str1.length < str2.length) {
    strLong = 2;
    strShort = 1;
    str1 = strArray[1];
    str2 = strArray[0];
  }
  //将字符串str1中的每个字母添加到numObject中作为它的属性
  for (i = 0, length = str1.length; i < length; i++) {
    //如果同一个字母出现多次，只对第一次添加属性
    if (!numObject[str1.substr(i, 1)]) {
      numObject[str1.substr(i, 1)] = 1;
    }
  }
  for (i = 0, length = str2.length; i < length; i++) {
    //如果str2中同一个字母出现多次，只对第一次进行比较
    if (numObject[str2.substr(i, 1)] === 0) {
      continue;
    }
    //如果numObject中不存在这个属性，说明这个字母str1中没有
    if (!numObject[str2.substr(i, 1)]) {
      console.log("str" + strShort + "中的第" + (i + 1) + "个字母 " + str2.substr(i, 1) + " 不存在str" + strLong + "中");
      return;
    } else {
      //已经出现过一次了，赋值为0
      numObject[str2.substr(i, 1)] = 0;
    }
  }
  console.log("str" + strShort + "中的字母str" + strLong + "均存在");
};
init();
