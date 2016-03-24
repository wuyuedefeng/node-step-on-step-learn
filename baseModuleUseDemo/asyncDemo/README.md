### async
参考资料:
> * node包: [(async)[https://github.com/caolan/async]](https://github.com/caolan/async)

> node中安装redis模块
> * npm install --save async

> 使用
> * series `串行` # tasks可以是Array或Object
> * waterfall `串行`(每个函数产生的值，都将传给下一个函数) # tasks必须是Array
> * parallel `并行` # tasks可以是Array或Object
> * parallelLimit `并行限制个数` # tasks可以是Array或Object

#### series -- tasks允许 `Array` `Object`
series - tasks为Array
```
    # Tasks -- Array
    async.series([
    	function (callback) {
    		setTimeout(function(){
    			callback(null, 1);
    		}, 500);
    	},
    	function(callback){
    		setTimeout(function(){
    			callback(null, 2);
    		},200)
    	}
    ], function(err, results){
    	console.log('seriesArray...');
    	console.log(results);
    });
```

series - tasks为Object
```
    # Tasks -- Object
    async.series({
    	one: function (callback) {
    		setTimeout(function(){
    			callback(null, 1);
    		}, 500);
    	},
    	two: function(callback){
    		setTimeout(function(){
    			callback(null, 2);
    		},200)
    	}
    }, function(err, results){
    	console.log('seriesObj...');
    	console.log(results);
    });
```

#### waterfall tasks只允许`Array`
tasks只能是数组
waterfall每个函数产生的值，都将传给下一个函数
```
    # tasks -- array
    async.waterfall([
    	function(callback){
    		callback(null, 'one', 'two');
    	}	,
    	function(arg1, arg2, callback){
    		callback(null, 'three');
    	},
    	function(arg1, callback){
    		callback(null, 'done');
    	}
    ], function(err, result){
    	console.log('waterfallArr....')
    	console.log(result);
    });
```

#### parallel -- tasks允许 `Array` `Object`
```
    # tasks -- Array
    async.parallel([
    	function(callback){
    		setTimeout(function(){
    			callback(null, 'one');
    		}, 100);
    	},
    	function(callback){
    		callback(null, 'two');
    	}
    ], function(err, results){
    	console.log('parallelArr.....')
    	console.log(results);
    })
```

```
    # tasks -- Object
    async.parallel({
    	parallelObjOne: function(callback){
    		setTimeout(function(){
    			callback(null, 'one');
    		}, 100);
    	},
    	parallelObjTwo: function(callback){
    		callback(null, 'two');
    	}
    }, function(err, results){
    	console.log('parallelObj....');
    	console.log(results);
    })
```

#### parallelLimit -- tasks允许 `Array` `Object`
parallelLimit函数和parallel类似，但是它多了一个参数limit。limit参数限制任务只能同时并发一定数量，而不是无限制并发
```
    # tasks -- Array
    async.parallelLimit([
    	function (callback){
    		callback(null, 'one');
    	},
    	function(callback){
    		callback(null, 'two');
    	},
    	function(callback){
    		callback(null, 'three');
    	}
    ], 2, function(err, results){
    	console.log('parallelLimitArray...');
    	console.log(results);
    });
```

```
    # tasks -- Object
    async.parallelLimit({
    	one: function(callback){
    		callback(null, 'one');
    	},
    	two: function(callback){
    		callback(null, 'two');
    	},
    	three: function(callback){
    		callback(null, 'three');
    	}
    }, 2, function(err, results){
    	console.log('parallelLimitObject...')
    	console.log(results);
    });
```
