/** JavaScript Event Emitter */

function EventEmitter() {
    this.eventList = {};
}

EventEmitter.prototype.on = function (eventName, listener) {
    this.eventList[eventName] = this.eventList[eventName] || [];
    this.eventList[eventName].push(listener);
}

EventEmitter.prototype.emit = function (eventName) {
    if (this.eventList[eventName]) {
        this.eventList[eventName].forEach((listener) => {
            listener();
        })
    }
}
