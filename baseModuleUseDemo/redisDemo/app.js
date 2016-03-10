var redis = require("redis");
/*
 连接redis数据库: createClient(port,host,options);
 如果REDIS是本机, 端口是默认的,直接写createClient()即可
 redisClient = redis.createClient(6379,'192.168.0.105',{});
 */
redisClient = redis.createClient();

//如果需要验证，还要进行验证
//client.auth(password, callback);

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
//redisClient.set('test_key', 'test_value', redis.print);
redisClient.get('test_key', function(err, value){
    if (err) throw(err);
    console.log('test_key:' + value);
});

/*
   === hset hget ===
   key:key:value
 */
redisClient.hset("hset_key1", "test1", "some value", redis.print);
redisClient.hset(["hset_key1", "test2", "some other value"], redis.print);
redisClient.hkeys("hset_key1", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
});
console.log('hset_value1:');
redisClient.hget("hset_key1","test1",redis.print);
console.log('hset_value2:');
redisClient.hget('hset_key1', "test2", redis.print)



/*
    === hmset hgetall begin ===
    key: obj
 */
// 方法1: client.hmset(hash, key1, val1, ... keyn, valn, [callback])
redisClient.hmset("user01", "name", "wangsen1", "age", "21");
redisClient.hgetall('user01', function(err, obj){
    if (err) throw(err);
    console.log('user01:');
    console.log(obj);
});
// 方法2:
redisClient.hmset(["user02", "name", "wangsen2", "age", "22"]);
redisClient.hgetall('user02', function(err, obj){
    if (err) throw(err);
    console.log('user02:');
    console.log(obj);
});
// 方法3: client.hmset(hash, obj[, callback])
redisClient.hmset("user03", {name: 'wangsen3', age: 23});
redisClient.hgetall('user03', function(err, obj){
    if (err) throw(err);
    console.log('user03:');
    console.log(obj);
});


/*redisClient.end();redisClient.quit();  两种方法都可以断掉与redis的连接.
 end()很粗暴，不管3721，一下子退出来了.
 而quit()则是先将语句处理完毕再干净地退出，斯文得很
 */
//redisClient.end();
redisClient.quit();





