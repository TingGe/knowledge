/**
 * util-path.js - The utilities for operating path such as id, uri
 */

var DIRNAME_RE = /[^?#]*\//


// 获取脚本绝对路径(带脚本及参数)
function getScriptAbsoluteSrc(node) {
  return node.hasAttribute ?
    //non-IE6/7
    node.src :
    // see http://msdn.microsoft.com/en-us/library/ms536429(VS.85).aspx
    node.getAttribute("src", 4)
}

//  Extract the directory portion of a path
//  dirname("a/b/c.js?t=123#xx/zz") ==\> "a/b/" ref:
//  http://jsperf.com/regex-vs-split/2
function dirname(path) {
  var result = path.match(DIRNAME_RE);
  // 此处可以调用 种子模块 > util-lang.js 来对 Array.isArray 兼容处理
  return Array.isArray(result) ? result[0] : result
}

// 以下是测试代码
var doc = document
var cwd = location.href
var scripts = doc.getElementsByTagName("script")

// Recommend to add `seajsnode` id for the `sea.js` script element
var loaderScript = doc.getElementById("seajsnode") || scripts[scripts.length - 1]

// When `sea.js` is inline, set loaderDir to current working directory
var loaderDir = dirname(getScriptAbsoluteSrc(loaderScript) || cwd)
console.log(getScriptAbsoluteSrc(loaderScript))
console.log(cwd)
console.log(loaderDir)
