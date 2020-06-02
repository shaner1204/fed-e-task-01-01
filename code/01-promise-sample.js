// Promise 是一个全局类型，可以使用它构建一个实例
// 这个类型的构造函数，需要一个函数作为参数
// 函数接收两个参数 resolve, reject
// promise 状态一旦确定就不可修改
// 最后对 resolve、reject 只能调用二者其一
const promise = new Promise(function (resolve, reject) {
    // resolve 就是将 promise 状态修改为 fulfilled —— 成功
    // 异步任务的操作结果通过 resolve 的参数传递出去
    resolve(100)

    // reject 就是将 promise 状态修改为 rejected —— 失败 
    // 失败的参数一般传的是一个错误的对象
    // reject(new Error('promise Rejected'))
})

// promise 实例创建完，可以用then方法分别去指定 onFulfilled、onRejected 回调函数
// then 方法第一个参数就是 onFulfilled 回调函数
// then 方法第二个参数就是 onRejected 失败回调函数
// then 方法中的回调函数会进入回调队列进行排队：也就是必须等待同步代码执行完毕，才会执行
promise.then(function (value) {
    console.log('resolved', value)
}, function (error) {
    console.log('rejected', error)
})