var Promise = require('promise');

// new Promise 依赖关系
// 上一个promise执行完到then中才能在then中执行下一个promise
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
//testPromise(0);

// ===============================================================
// new Promise.all
// promise同时执行,所有执行成功执行resolve回调,有一个失败就执行reject回调
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







