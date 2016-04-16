/**
 * 设计模式：策略模式
 */

var validator = {
  // 所有可用的验证类型
  types: {},
  // 本次验证所有的错误消息
  messages: [],
  // 本次验证的配置，格式为：
  // name: validation type
  config: {},
  // 接口方法
  // `data` 是名值对
  validate: function(data) {
    var i, msg, type, checker, result_ok;
    // 重置所有的错误消息
    this.messages = [];
    for (i in data) {
      if (data.hasOwnProperty(i)) {
        type = this.config[i];
        checker = this.types[type];
        if (!type) {
          continue; // 不需要验证
        }
        if (!checker) { // 没有对应的验证类型
          throw {
            name: "ValidationError",
            message: "No handler to validate type " + type
          };
        }
        result_ok = checker.validate(data[i]);
        if (!result_ok) {
          msg = "Invalid value for *" + i + "*, " + checker.instructions;
          this.messages.push(msg);
        }
      }
    }
    return this.hasErrors();
  },
  // 辅助方法
  hasErrors: function() {
    return this.messages.length !== 0;
  }
};

// 验证空值
validator.types.isNonEmpty = {
  validate: function(value) {
    return value !== "";
  },
  instructions: "the value cannot be empty"
};

// 验证数字
validator.types.isNumber = {
  validate: function(value) {
    return !isNaN(value);
  },
  instructions: "the value can only be a valid number, e.g. 1, 3.14 or 2010"
};

// 验证是否只包含字母和数字
validator.types.isAlphaNum = {
  validate: function(value) {
    return !/[^a-z0-9]/i.test(value);
  },
  instructions: "the value can only contain characters and numbers, no special symbols"
};


// demo 表单验证
var data = {
  first_name: "Super",
  last_name: "Man",
  age: "unknown",
  username: "o_O"
};

validator.config = {
  first_name: 'isNonEmpty',
  age: 'isNumber',
  username: 'isAlphaNum'
};

validator.validate(data);
if (validator.hasErrors()) {
  console.log(validator.messages.join("\n"));
}
