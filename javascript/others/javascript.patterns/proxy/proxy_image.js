/**
 * 虚拟代理实现图片预加载
 */
var myImage = (function() {
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc: function(src) {
      imgNode.src = src;
    }
  }
})();

var proxyImage = (function() {
  var img = new Image;
  //当大图加载好后再次调用函数改变myImage.src的值
  img.onload = function() {
    myImage.setSrc(img.src);
  };
  return {
    setSrc: function(src) {
      //占位图
      myImage.setSrc('https://avatars3.githubusercontent.com/u/4074517?v=3&s=40');
      //把大图让给img慢慢加载
      img.src = src;
    }
  }
})();

// 大图
proxyImage.setSrc('https://avatars0.githubusercontent.com/u/4074517?v=3&s=460');
