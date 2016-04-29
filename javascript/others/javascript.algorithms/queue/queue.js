/**
 * Creates a new queue. A queue is a first-in-first-out (FIFO) data structure -
 * items are added to the end of the queue and removed from the front.
 */
var Queue = (function() {
  "use strict";

  /**
   * @constructor
   * The Queue Class
   */
  function Queue() {
    this.head = null;
    this.tail = null;
    this.current = null;
    this.length = 0;
  }

  /**入队列
   * Enqueues the given item
   * @param {*} item
   */
  Queue.prototype.enqueue = function(item) {
    var node = {
      data: item,
      next: null
    };

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
  };

  /**出队列
   * Dequeues and returns the first item in the Queue. If the Queue is empty it returns null.
   * @return {?*}
   */
  Queue.prototype.dequeue = function() {
    if (this.head) {
      var aux = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return aux.data;
    }
    return null;
  };

  /**
   * Returns the first element of the queue or null if the Queue is empty
   * @return {?*}
   */
  Queue.prototype.first = function() {
    return this.head ? this.head.data : null;
  };

  /**
   * Returns the last element of the queue or null if the Queue is empty
   * @return {?*}
   */
  Queue.prototype.last = function() {
    return this.tail ? this.tail.data : null;
  };


  /**
   * Returns true if the queue is empty, and false otherwise
   * @return {boolean}
   */
  Queue.prototype.isEmpty = function() {
    return !this.head;
  };

  /**
   * Returns the size of the queue
   * @return {number}
   */
  Queue.prototype.size = function() {
    return this.length;
  };


  /**
   * Starts the iterator at the head of the queue
   */
  Queue.prototype.iterate = function() {
    this.current = this.head;
  };

  /**
   * Moves the iterator to the next element
   */
  Queue.prototype.next = function() {
    if (this.current) {
      this.current = this.current.next;
    }
  };

  /**
   * Returns the current element of the Queue or null if there isn't one
   */
  Queue.prototype.item = function() {
    return this.current ? this.current.data : null;
  };

  /**由于对null与undefined用!操作符时都会产生true的结果，如果明确设置了this.current的值
	（非 null/undefined/0""/等值），返回值自然取跟this.current一样的值；如果没有设置，
	 返回值就会默认为false，而不是 null或undefined。
     * Returns true if there are more elements after the current one
     * @return {boolean}
     */
  Queue.prototype.hasNext = function() {
    return !!this.current; //确保返回值是 Boolean 类型而已, 取了两次非
  };

  return Queue;
}());
