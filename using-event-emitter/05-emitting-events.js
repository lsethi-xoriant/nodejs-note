var util = require("util"),
    EventEmitter = require("events").EventEmitter;

var Ticker = function(){
    var self = this;
    setInterval(function(){
        self.emit('tick');
    }, 1000)
};
util.inherits(Ticker, EventEmitter);

// clients of this class could instantiate this Ticker class and listen for the 'tick' events like so

var ticker = new Ticker();
ticker.on('tick', function(){ // 监听构造函数中发起的事件
    console.log(new Date());
})
