# 数据交互模块

## 跨域场景

| 约束                                  | 与服务器端交互方式            |
| ----------------------------------- | -------------------- |
| 当参数长度小于等于2036或IE6一类不支持POST跨域技术的浏览器时 | img、JSONP            |
| 当参数长度大于2036且小于等于8192字节              | 跨域Ajax的Post方式、iframe |

## 同域场景

## 附录

- [Lightweight-JSONP](https://github.com/erikarenhill/Lightweight-JSONP)

