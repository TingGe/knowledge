/**
 * 对象创建模式：命名空间模式 ＋ 依赖声明模式、沙箱模式、method()方法
 */

/*
 * 沙箱模式
 */

function Sandbox() {
  // 将参数转换为数组
  var args = Array.prototype.slice.call(arguments),
    // 最后一个参数是回调函数
    callback = args.pop(),
    // 参数可以作为数组或者单独的参数传递
    modules = (args[0] && typeof args[0] === "string") ? args : args[0],
    i;

  // 保证函数是作为构造函数被调用
  if (!(this instanceof Sandbox)) {
    return new Sandbox(modules, callback);
  }

  // 根据需要给this添加属性
  this.a = 1;
  this.b = 2;

  // 给this对象添加模块
  // 未指明模块或者*都表示“使用所有模块”
  if (!modules || modules[0] === '*') {
    modules = [];
    for (i in Sandbox.modules) {
      if (Sandbox.modules.hasOwnProperty(i)) {
        modules.push(i);
      }
    }
  }

  // 初始化指定的模块
  for (i = 0; i < modules.length; i += 1) {
    Sandbox.modules[modules[i]](this);
  }

  // 调用回调函数
  callback(this);
}

// 需要添加在原型上的属性
Sandbox.prototype = {
  name: "My Application",
  version: "1.0",
  getName: function() {
    return this.name;
  }
};

// 添加模块
Sandbox.modules = {};
Sandbox.modules.dom = function(box) {
  box.getElement = function() {};
  box.getStyle = function() {};
  box.foo = "bar";
};
Sandbox.modules.event = function(box) {
  // 如果有需要的话可以访问Sandbox的原型
  // box.constructor.prototype.m = "mmm";
  box.attachEvent = function() {};
  box.dettachEvent = function() {};
};
Sandbox.modules.ajax = function(box) {
  box.makeRequest = function() {};
  box.getResponse = function() {};
};

// demo
// 使用沙箱模式

new Sandbox(function(box) {
  // 你的代码……
});

Sandbox(['ajax', 'event'], function(box) {
  // console.log(box);
});

Sandbox('dom', 'event', function(box) {
  // 使用dom和event模块
  Sandbox('ajax', function(box) {
    // 另一个沙箱中的box，这个box和外面的box不一样
    //...
    // 使用ajax模块的代码到此为止
  });
  // 这里的代码与ajax模块无关
});

Sandbox('*', function(box) {
  // console.log(box);
});

Sandbox(function(box) {
  // console.log(box);
});
