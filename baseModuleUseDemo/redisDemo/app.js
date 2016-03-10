var redis = require("redis");
/*
 连接redis数据库: createClient(port,host,options);
 如果REDIS是本机, 端口是默认的,直接写createClient()即可
 redisClient = redis.createClient(6379,'192.168.0.105',{});
 */
redisClient = redis.createClient();

//如果需要验证，还要进行验证
//redisClient.auth(password, callback);

//错误监听
redisClient.on("error", function (err) {
    console.log("Error: " + err);
});

/*
    === set get begin ===
    key: value
    redis.print，回调函数，将redis的返回值显示出来。上一句执行结果，将返回“OK”. callback is optional: client.set("some key", "some val");
 */
redisClient.set('test_key', 'test_value1');
//redisClient.set(['test_key', 'test_value1']);
//redisClient.set('test_key', 'test_value', redis.print);
redisClient.get('test_key', function(err, value){
    if (err) throw(err);
    console.log('test_key:' + value);
});

/*
    === hmset hgetall begin ===
    key: hash
 */
// 方法1: client.hmset(hash, key1, val1, ... keyn, valn, [callback])
redisClient.hmset("user01", "name", "wangsen1", "age", "21");
redisClient.hgetall('user01', function(err, hash){
    if (err) throw(err);
    console.log('user01:');
    console.log(hash);
});
// 方法2:
redisClient.hmset(["user02", "name", "wangsen2", "age", "22"]);
redisClient.hgetall('user02', function(err, hash){
    if (err) throw(err);
    console.log('user02:');
    console.log(hash);
});
// 方法3: client.hmset(hash, obj[, callback])
redisClient.hmset("user03", {name: 'wangsen3', age: 23});
redisClient.hgetall('user03', function(err, hash){
    if (err) throw(err);
    console.log('user03:');
    console.log(hash);
});

/*
 === hset hget ===
 修改 key:hash 中某个key的值, 或增加新字段并赋值
 返回值: integer-reply：含义如下
        1如果field是一个新的字段
        0如果field原来在map里面已经存在
 */
redisClient.hset("user01", "name", "wangsen11", redis.print);
redisClient.hset("user01", "agent", "男", redis.print);
redisClient.hset(["user02", "age", "222"], redis.print);
redisClient.hkeys("user01", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
});
redisClient.hget("user01","name",redis.print);
redisClient.hgetall('user01', function(err, hash){
    if (err) throw(err);
    console.log('user01:');
    console.log(hash);
});
redisClient.hget('user02', "age", redis.print);
redisClient.hmget('user01', 'name', 'what', 'age', function(err, arr){
    console.log('hmget test value--:');
    console.log(arr);
});



/*redisClient.end();redisClient.quit();  两种方法都可以断掉与redis的连接.
 end()很粗暴，不管3721，一下子退出来了.
 而quit()则是先将语句处理完毕再干净地退出，斯文得很
 强烈建议使用quit()方法
 */
//redisClient.end(); // 立即断开和redis的连接
redisClient.quit();  // 语句全部处理完,断开与redis连接





