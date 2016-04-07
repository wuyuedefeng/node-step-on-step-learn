### Promise的使用
高版本node已经内嵌了Promise机制

---

* 引入方式
```
var Promise = require('promise');
```

* 使用方法`依赖关系顺序执行`
上一个promise执行完到then中才能在then中执行下一个promise

```
function testPromise(begin) {
    return new Promise(function (resolve, reject) {
        if (begin > 5) {
            reject('begin not allow > 5');
            return ;
        }

        setTimeout(function () {
            now = begin + 2;
            console.log(now);
            resolve(now);
        }, 1000);
    }).then(function (now_index) {
        console.log('success' + now_index);
        testPromise(now_index);
    }, function(err){
        console.log(err);
    });
}
testPromise(0);
```


#### Promise.all`非依赖同时执行`
多个异步方法同时执行,最后回调
```
function testAllPromise(begin) {
    return new Promise(function (resolve, reject) {
        if (begin > 5) {
            reject('begin not allow > 5');
            return ;
        }

        setTimeout(function () {
            now = begin + 2;
            console.log(now);
            resolve(now);
        }, 1000);
    });
}

function testPromise2(){
    return new Promise.all([testAllPromise(0), testAllPromise(1), testAllPromise(7)]).then(function(datas){
        console.log('promise all ------');
        console.log(datas);
    }, function(err){
        console.log('promise all err ------');
        console.log(err);
    })
}
testPromise2();
```

---

> 如果node版本较低,可以使用其他实现Promise标准的库
>* `bluebird`[github](https://github.com/petkaantonov/bluebird)
>* `Q`[github](https://github.com/kriskowal/q)
>* `Deferred`[github](https://github.com/medikoo/deferred)


