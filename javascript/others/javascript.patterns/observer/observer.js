"use strict";
var publisher = {
  subscribers: {
    any: [] // event type: subscribers
  },
  // 订阅
  subscribe: function(fn, type) {
    type = type || 'any';
    if (typeof this.subscribers[type] === "undefined") {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },
  // 退订
  unsubscribe: function(fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },
  // 发布
  publish: function(publication, type) {
    this.visitSubscribers('publish', publication, type);
  },
  // dispatch
  visitSubscribers: function(action, arg, type) {
    var pubtype = type || 'any',
      subscribers = this.subscribers[pubtype],
      i,
      max = subscribers.length;

    for (i = 0; i < max; i += 1) {
      if (action === 'publish') {
        subscribers[i](arg);
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1);
        }
      }
    }
  }
};

function makePublisher(o) {
  var i;
  for (i in publisher) {
    if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
      o[i] = publisher[i];
    }
  }
  o.subscribers = {
    any: []
  };
}
