 //= require <jquery>

//Object.create()在ECMAScript5中已添加，对于不支持Object.create()的浏览器可以通过以下代码片段模拟实现。
//参见Douglas Crockford的《原型继承》(http://javascript.crockford.com/prototypal.html)

if (typeof Object.create !== "function") {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

// Robert Kieffer 写的GUID生成器
// 参见 
// http://www.broofa.com/2008/09/javascript-uuid-function/
// http://www.broofa.com/Tools/Math.uuid.js

Math.guid = function () {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	}).toUpperCase();
};

var Model = {
	inherited: function () {},
	created: function () {
		this.records = {};
		this.attributes = [];
	},

	prototype: {
		init: function () {}
	},

	create: function () {
		var object = Object.create(this);
		object.parent = this;
		object.prototype = object.fn = Object.create(this.prototype);

		object.created();
		this.inherited(object);
		return object;
	},

	init: function () {
		var instance = Object.create(this.prototype);
		instance.parent = this;
		instance.init.apply(instance, arguments);
		return instance;
	},

	extend: function (o) {
		var extended = o.extended;
		jQuery.extend(this, o);
		if (extended) {
			extended(this);
		}
	},

	include: function (o) {
		var included = o.included;
		jQuery.extend(this.prototype, o);
		if (included) {
			included(this);
		}
	},

	// 通过ID查找，找不到则抛出异常
	find: function (id) {
		var record = this.records[id];
		if (!record) {
			throw ("Unkonwn record");
		}
		return record;
	},

	// 向ORM中添加记录
	populate: function (values) {
		// 重置model和records
		this.records = {};

		for (var i = 0, il = values.length; i < il; i++) {
			var record = this.init(values[i]);
			record.newRecord = false;
			this.records[record.id] = record;
		}
	}
};

/**
 * 创建一个基本的ORM
 */

// 用来保存资源的对象
Model.records = {};

Model.include({
	newRecord: true,

	create: function () {
		if (!this.id) {
			this.id = Math.guid();
		}
		this.newRecord = false;
		this.parent.records[this.id] = this;
	},

	destory: function () {
		delete this.parent.records[this.id];
	},

	update: function () {
		this.parent.records[this.id] = this;
	},

	// 将对象存入hash记录中，保持一个引用指向它
	save: function () {
		this.newRecord ? this.create() : this.update();
	},

	attributes: function () {
		var result = {};
		for (var i in this.parent.attributes) {
			var attr = this.parent.attributes[i];
			result[attr] = this[attr];
		}
		result.id = this.id;
		return result;
	},

	toJSON: function () {
		return (this.attributes());
	}
});

Model.LocalStorage = {
	saveLocal: function (name) {
		// 将记录转换为数组
		var result = [];
		for (var i in this.records) {
			result.push(this.records[i]);
		}

		localStoragep[name] = JSON.stringify(result);
	},

	loadLocal: function (name) {
		var result = JSON.parse(localStorage[name]);
		this.populate(result);
	}
};

Model.include({
	createRemote: function (url, callback) {
		$.post(url, this.attributes(), callback);
	},

	updateRemote: function (url, callback) {
		$.ajax({
			url: url,
			data: this.attributes(),
			success: callback,
			type: "PUT"
		});
	}
});