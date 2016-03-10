### redis
参考资料:
> redis手册: [redis命令(redis中文资料站):http://www.redis.cn/commands.html](http://www.redis.cn/commands.html)
> node包: [redis](https://www.npmjs.com/package/redis)
准备
> 安装redis服务器

> node中安装redis模块
> * npm install redis --save

使用
> 连接
> * createClient(port,host,options);

基础方法
> key: value
> * set: redisClient.set('test_key', 'test_value1');
> * set: redisClient.set(['test_key', 'test_value1']); #同上
> * get: redisClient.get('test_key', function(err, value){});

> key: hash
> * set: redisClient.hmset("user01", "name", "wangsen1", "age", "21");
> * set: redisClient.hmset(["user02", "name", "wangsen2", "age", "22"]); #同上
> * set: redisClient.hmset("user02", ["name", "wangsen2", "age", "22"]); #同上
> * set: redisClient.hmset("user03", {name: 'wangsen3', age: 23}); #同上
> * get: redisClient.hgetall('user01', function(err, hash){});
> * getHashKeys: redisClient.hkeys("user01", function (err, replies) {});

> 操作(添加或修改)(key:hash)结构 hash中key和value. (返回值: integer-reply：含义如下: 1 如果field是一个新的字段, 0 如果field原来在map里面已经存在)
> * set: redisClient.hset("user01", "name", "wangsen11", redis.print); # 修改key为user01,对应的hash中key为name的值为wangsen11,如果hash中没有该key,将添加name的key,并设置值为wangsen11
> * set: redisClient.hset(["user02", "age", "222"], redis.print); # 同上
> * get: redisClient.hget("user01","name",redis.print);# 获取key为user01的hash中key为name的值




