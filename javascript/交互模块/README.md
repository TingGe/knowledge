# 数据交互模块

> JavaScript 的同源策略、P3P

## 跨域场景

| 约束                                  | 与服务器端交互方式                 |
| ----------------------------------- | ------------------------- |
| 当参数长度小于等于2036或IE6一类不支持POST跨域技术的浏览器时 | img、JSONP                 |
| 当参数长度大于2036且小于等于8192字节              | 跨域 Ajax 的 Post 方式、iframe  |
| 主域相同而子域不同                           | document.domain           |
|                                     | window.name               |
|                                     | HTML5 postMessage         |
|                                     | HTML5 跨域头 XMLHttpRequest2 |

## 同域场景

- [axios](https://github.com/mzabriskie/axios)

## 附录

- [Lightweight-JSONP](https://github.com/erikarenhill/Lightweight-JSONP)
- [前端开发基础－JavaScript（三）](https://mp.weixin.qq.com/s?__biz=MzI3MDE0MzAzMw==&mid=2652201874&idx=1&sn=f9c9bcb1505af641862c90e60069983c)
