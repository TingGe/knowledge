/**
 * 设计模式：遍历模式
 */

var Agg = function(){};
Agg.prototype.hasNext = function(){
  // 是否有下一个元素
};
Agg.prototype.next = function(){
  // 返回序列中的下一个元素
};
var agg = new Agg();

while (agg.hasNext()) {
  // 访问element……
  console.log(agg.next());
}
