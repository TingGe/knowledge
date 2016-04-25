/**
 * 设计模式：单例模式
 */

var getSingle = function(fn) {
  var result;
  return function() {
    return result || (result = fn.apply(this, arguments));
  }
};

var createBtn = function() {
  var div = document.createElement('div');
  div.innerHTML = "俺是弹窗";
  document.body.appendChild(div);
  return div;
};

var createSingleBtn = getSingle(createBtn);

document.getElementById('btn').onclick = function() {
  createSingleBtn();
}
