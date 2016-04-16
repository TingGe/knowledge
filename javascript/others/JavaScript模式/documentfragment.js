/**
 * DOM和浏览器中的模式：DOM操作——使用文档碎片
 */

// 创建文档
var p, t, frag;

frag = document.createDocumentFragment();

p = document.createElement('p');
t = document.createTextNode('first paragraph');
p.appendChild(t);
frag.appendChild(p);

p = document.createElement('p');
t = document.createTextNode('second paragraph');
p.appendChild(t);
frag.appendChild(p);

document.body.appendChild(frag);

// 更新文档
var oldnode = document.getElementById('result'),
    clone = oldnode.cloneNode(true);

// 修改克隆后的节点……

// 结束修改之后：
oldnode.parentNode.replaceChild(clone, oldnode);
