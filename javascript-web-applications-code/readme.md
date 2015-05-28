# 《基于MVC的JavaScript Web富应用开发》摘要 #

整理自李晶、张散集译的《基于MVC的JavaScript Web富应用开发》（英文书名 ‘JavaScript Web Applications’）中的代码片段。,由(美国)Alex MacCaw著、O'Reilly出版发行。

## MVC和类 ##

1. jQuery的作者John Resig的博客，讲解[如何实现经典的类继承](http://ejohn.org/blog/simple-javascript-inheritance/)

*个人理解：类最基本的组成 parent、proxy、extends、include、init。参见class.js。

## 事件和监听 ##

1. event对象可得到事件的信息，如时间戳、坐标和事件宿主元素(target)。包含的方法停止事件冒泡和组织事件的默认行为。
2. 所有浏览器都支持的事件：click、dbclick、mousemove、mouseover、mouseout、focus、blur、change(表单输入框特有)、submit(表单特有)。参见PPK的文章中查看[怪异模式支持的事件类型](http://www.quirksmode.org/dom/events/index.html)。
3. 事件对象：事件类型、事件发生时反映当前环境信息的属性、事件发生时的环境参数。
更多参照[W3C完整的标准规范](http://www.w3.org/TR/DOM-Level-2-Events/)
4. 自定义事件和jQuery插件示例：参见jquery.plugins.tabs
5. DOM无关事件。基于事件编程非常强大，因为它能让你的应用架构充分解耦，让功能变得更加内聚且具有更好的可维护性。事件本质上是和DOM无关的，因此你可以很容易地开发出一个事件驱动的库。这种模式称为发布/订阅。发布/订阅（Pub/Sub）是一种消息模式，它有两个参与者：发布者和订阅者。发布者向某个信道(channel)发布一条消息，订阅者绑定这个信道，当有消息发布至信道时就会接收到一个通知。最重要的是，发布者和订阅者是完全解耦的，彼此并不知道对方的存在。两者仅仅共享一个信道名称。发布者和订阅者的解耦可以让你的应用易于扩展，而不必引入额外的交叉依赖和耦合，从而提高了应用的可维护性，添加额外功能也非常容易。在应用中使用发布/订阅（Pub/Sub）模式，你只需记录回调和事件名称的对应关系及调用它们的方法。示例参见：pubsub

## 控制器和状态 ##
1. Google提出的“Ajax抓取规则”

## 依赖管理 ##
1. 为了让代码更具可移植性，亟需引入一个标准解决方案，让所有的JavaScript都能遵照这个标准来实现统一的模块管理系统，这样JavaScript代码库就可以运行在所有的环境中了。Kevini Dangoor按照这个思路提出了CommonJS规范。它在一篇博客中首次提出[一个公开的标准](http://www.blueskyonmars.com/2009/01/29/what-server-side-javascript-needs/)，这个标准适用于JavaScript解释器和开发者。
2. [CommonJS邮件列表](https://groups.google.com/forum/#!forum/commonjs)
3. [CommonJS](http://www.commonjs.org/)很快成为JavaScript模块写法的事实标准。它包含很多标准，包括IO接口、底层的套接字流（Socket stream），以及单元测试。
4. 遵循CommonJS规范的JavaScript解释器，如[Node.js](http://nodejs.org/)
5. CommonJS团队为在浏览器端实现CommonJS提出了一个规范“[模块转换格式](http://wiki.commonjs.org/wiki/Modules/Transport)”。这种转换格式将CommonJS的模块包装在一个回调函数中，以便更好地处理客户端的异步加载。
6. 目前最主要、应用最广泛的两个模块实现是[TransportC](http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition)和[TransportD](http://wiki.commonjs.org/wiki/Modules/Transport/D)。
7. Sprockets(包括所有的模块包装器)的中心思想是，所有的JavaScript文件都需要预处理，不管是在服务器端用程序做处理，还是使用命令行工具做处理。
8. 使用加载器来加载页面时，用户可能会看到页面闪了一下，出现一部分没有交互行为的内容快速闪过（FUBC），比如在JavaScript执行之前会有一部分无样式的页面原始内容闪烁一下。如果你不依赖JavaScript来修改初始页面的样式，问题其实并不严重。但如果依赖JavaScript来操作样式，则需要将样式提取出来放入初始化CSS中，比如隐藏一些元素或展示一个加载指示器，提示页面正在加载中。