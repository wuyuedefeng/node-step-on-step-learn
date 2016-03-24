var async = require('async');

// 同步顺序无关系执行
// tasks可以是对象或者数组
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

// 同步顺序有关系执行
// waterfall每个函数产生的值，都将传给下一个函数
//  tasks只能是数组
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


//  并行无顺序执行
// tasks为数组
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
// tasks为对象
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



// parallelLimit函数和parallel类似，但是它多了一个参数limit。limit参数限制任务只能同时并发一定数量，而不是无限制并发
// tasks为数组
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

//  tasks为对象
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



