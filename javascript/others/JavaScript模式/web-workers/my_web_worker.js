/**
 * DOM和浏览器中的模式：长时间运行的脚本——Web Workers
 */

var end = 1e8,
  tmp = 1;

postMessage('hello there');

while (end) {
  end -= 1;
  tmp += end;
  if (end === 5e7) { // 5e7是1e8的一半
    postMessage('halfway there, `tmp` is now ' + tmp);
  }
}

postMessage('all done');
