// 参考https://github.com/NodeRedis/node_redis/blob/master/examples%2Fpub_sub.js
var redis = require('redis');
var client1 = redis.createClient();
var client2 = redis.createClient();
var msg_count = 0;

client1.on('subscribe', function(channel, count){
   console.log('客户端1 订阅 channel:' + channel + ', total subscriptions:' + count);
    if (count == 2){
        client2.publish('testChannel', '我来自通道1');
        client2.publish('testChannel2', '我来自通道2');
        client2.publish('testChannel', '我来自通道1');
    }
});

client1.on('unsubscribe', function(channel, count){
   console.log('客户端1 取消订阅channel:'+ channel + " total subscriptions:" + count);
    if (count == 0){
        client1.end();
        client2.end();
    }
});

client1.on('message', function(channel, message){
    console.log('客户端1 从channel:' + channel + ' 收到消息:' + message);
    msg_count ++ ;
    if (msg_count == 3){
        client1.unsubscribe();
    }
});

client1.on('ready', function(){
    // if you need auth, do it here

    client1.incr('did a thing');
    client1.subscribe('testChannel', 'testChannel2');

});

client2.on('ready', function(){
    // if you need auth, do it here
});

