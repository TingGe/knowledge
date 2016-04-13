/**
* 作者：听歌
* 电子邮件：505253293@163.com
* 个人主页：https://github.com/TingGe
* 跨域Ajax的Post方式。
* @param url {String} 服务器URL
* @param param {Object} 参数json
* @param callback {Function} 回调函数
*/
var sendByPost = function(url, param, callback) {
  var win = window,
  Request, ex, request;
  try {
    Request = win.XDomainRequest;
    if (Request) {
      request = new Request;
      request.open("POST", url, true);
    } else if (Request = win.XMLHttpRequest) {
      Request = new Request;
      if ("withCredentials" in Request) {
        request = Request;
        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        request.withCredentials = "yes";
      }
    } else {
      request = false;
    }

    if (request) {
      if (request.onreadystatechange === undefined) {
        request.onload = function(response) {
          response = request.response || request.responseText;
          return callback && callback(response);
        };
      } else {
        request.onreadystatechange = function(response) {
          if (request.readyState === 4) {
            if ((request.status >= 200 && request.status < 300) || request.status === 304) {
              response = request.response || request.responseText;
              return callback && callback(response);
            }
          }
        };
      }
      request.send(JSON.stringify(param));
      return request;
    }
  } catch (_error) {
    // 浏览器不支持 Ajax Post 方式
  }
};
