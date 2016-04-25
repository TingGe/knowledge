/*
 * 状态模式
 */

var delegate = function(client, delegation) {
  return {
    buttonWasPressed: function() {
      return delegation.buttonWasPressed.apply(client, arguments);
    }
  }
};

var Light = function() {
  this.offState = delegate(this, FSM.off);
  this.onState = delegate(this, FSM.on);
  this.currState = this.offState; //设置当前状态
  this.button = null;
};
Light.prototype.init = function() {
  var button = document.createElement('button'),
    self = this;
  button.innerHTML = "开关";
  this.button = document.body.appendChild(button);
  this.button.onclick = function() {
    self.currState.buttonWasPressed();
  };
};

var FSM = {
  off: {
    buttonWasPressed: function() {
      console.log('关灯');
      this.currState = this.onState;
    }
  },
  on: {
    buttonWasPressed: function() {
      console.log('开灯');
      this.currState = this.offState;
    }
  }
};

var light = new Light();
light.init();
