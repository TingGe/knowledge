/**
 * 使用apply() 和 call()的原因，比如“委托”。
 */

//= require <jquery>

var App {
	log: function () {
		if (typeof console == "undefined") {
			return;
		}

		// 将参数转换为合适的数组
		var args = jQuery.makeArray(arguments);

		// 插入一个新的参数
		args.unshift("(App)");

		// 委托给 console
		console.log.apply(console, args);
	}
};