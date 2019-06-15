/**
 * 事件订阅与发布
 * @author zhaoyiming
 * @since  2018/12/10
 */

function isFunc (func) {
  return Object.prototype.toString.call(func) === '[object Function]';
}

function Event () {
  this.eventList = {};
}

Event.prototype.on = function (eventName, callback) {
  if (this.eventList[eventName] === undefined) {
    this.eventList[eventName] = [];
  }
  if (isFunc(callback)) {
    this.eventList[eventName].push(callback);
  }
}

Event.prototype.emit = function () {
  var args = [].slice.call(arguments, 0);
  var eventName = args[0];
  if (this.eventList[eventName]) {
    for (var i = 0, len = this.eventList[eventName].length; i < len; i += 1) {
      this.eventList[eventName][i].apply(null, args.slice(1));
    }
  }
}

export default new Event();
