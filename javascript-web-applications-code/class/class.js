/**
 * 类Class。
 */

var Class = function (parent) {
	var klass = function () {
		this.init.apply(this, arguments);
	};

	// 改变klass的原型
	if (parent) {
		var subclass = function () {};
		subclass.prototype = parent.prototype;
		klass.prototype = new subclass;
	}

	klass.prototype.init = function () {};

	//定义的别名
	klass.fn = klass.prototype;
	klass.fn.parent = klass;
	klass._super = klass.__proto__;

	// 添加一个proxy函数
	klass.proxy = function (func) {
		var self = this;
		return (function () {
			return func.apply(self, arguments);
		});
	};

	// 在实例中也添加这个函数
	klass.fn.proxy = klass.proxy;

	/* include/extend相关的代码…… */

	// 给类添加属性
	klass.extend = function (obj) {
		var extended = obj.extended;
		for (var i in obj) {
			klass[i] = obj[i];
		}
		if (extended) {
			extended(klass);
		}
	};

	// 给实例添加属性
	klass.include = function (obj) {
		var included = obj.included;
		for (var i in obj) {
			klass.fn[i] = obj[i];
		}
		if (included) {
			included(klass);
		}
	};

	return klass;
};