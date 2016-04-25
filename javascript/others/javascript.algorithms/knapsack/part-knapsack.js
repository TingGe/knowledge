function Good(p, w, r) {
  this.p = p;
  this.w = w;
  this.r = r;
}
var load = 0; //包内现存货品的重量
var value = 0; //包内现存货品总价值
var capacity = 30; //背包的容量
var p = [60, 140, 60, 50]; //价值
var w = [12, 20, 10, 5]; //重量
var r = [0, 0, 0, 0]; //价值与重量的比
var a = [];
for (var i = 0; i < p.length; i++) {
  a[i] = new Good(p[i], w[i], r[i]);
  a[i].r = a[i].p / a[i].w;
}

function bigger(a, b) {
  if (b.r > a.r) return 1;
  else return -1;
}
a.sort(bigger); //调用sort排序函数，你大概不介意吧，按照价值与重量比排序,贪心
i = 0;
while (load < capacity && i < 4) {
  if (a[i].w <= (capacity - load)) {
    value += a[i].p;
    load += a[i].w;
  } else {
    var rr = (capacity - load) / a[i].w;
    value += rr * a[i].p;
    load += capacity - load;
  }
  ++i;
}
document.write("背包中总价值=" + value); //输出结果
document.write("<br>");
document.write("背包中总重量=" + load);
