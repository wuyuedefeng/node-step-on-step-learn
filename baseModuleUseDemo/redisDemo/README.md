### redis
准备
> 安装redis服务器
> 需要redis模块
> * npm install redis --save

使用
> 连接
> * createClient(port,host,options);

基础方法
> key: value
> * set: redisClient.set('test_key', 'test_value1');
>> * get: redisClient.set('test_key', 'test_value1');

> key: hash
> * set: redisClient.hmset("user01", "name", "wangsen1", "age", "21");
> * set: redisClient.hmset(["user02", "name", "wangsen2", "age", "22"]); #同上
> * set: redisClient.hmset("user03", {name: 'wangsen3', age: 23}); #同上
>> * get: redisClient.hgetall('user01', function(err, hash){});
>> * getHashKeys: redisClient.hkeys("user01", function (err, replies) {});

> 添加修改(key:hash)结构 hash中key和value
> * redisClient.hset("user01", "name", "wangsen11", redis.print); # 修改key为user01,对应的hash中key为name的值为wangsen11,如果hash中没有该key,将添加name的key,并设置值为wangsen11
> * redisClient.hset(["user02", "age", "222"], redis.print); # 同上
>> * redisClient.hget("user01","name",redis.print);# 获取key为user01的hash中key为name的值




