/**
 * 私有变量或函数暴露给全局的示例。
 */

(function (exports) {
	var foo = "bar";

	// 将变量暴露给全局
	exports.foo = foo;
})(window);

assertEqual(foo, "bar");