/**
 * 作者：听歌
 * 电子邮件：505253293@163.com
 * 个人主页：https://github.com/TingGe
 * 利用 XMLHttpRequest Level 2 的 formData 特性，跨域Ajax的Post FormData方式。
 *
 * @param url {String} 服务器URL
 * @param id {Object} form 的 id
 * @param callback {Function} 回调函数
 */

var sendByFormData = function(url, id, callback) {
  var win = window,
    form = document.getElementById(id),
    formData = new FormData(form),
    Request, ex, request;
  try {
    Request = win.XMLHttpRequest;
    if (Request) {
      Request = new Request;
      if ("withCredentials" in Request) {
        request = Request;
        request.open("POST", url, true);
        // multipart/form-data 与 x-www-form-urlencoded 区别:
        // multipart/form-data：既可以上传文件等二进制数据，也可以上传表单键值对，只是最后会转化为一条信息；
        // x-www-form-urlencoded：只能上传键值对，并且键值对都是间隔分开的。
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.setRequestHeader('X-Request-With', null);
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
      request.send(formData);
      return request;
    }
  } catch (_error) {
    // 浏览器不支持 Ajax Post formData 方式
  }
};
