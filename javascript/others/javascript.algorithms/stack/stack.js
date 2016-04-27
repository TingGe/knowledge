function Stack() {
  this.dataStore = []; //数组实现的栈
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function peek() {
  return this.dataStore[this.top - 1];
}

function pop() {
  return this.dataStore[--this.top];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}
