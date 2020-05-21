// 1、最终运行结果为——【10】
// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6]()

// 2、最终执行结果——【temp is not defined】
// var temp = 123;
// if (true) {
//     console.log(temp)
//     let temp = 234
// }

// 3、结合ES6新语法，用最简单的方式找出数组中最小的值
// var arr = [12, 34, 32, 89, 4]
// console.log(Math.min(...arr), '扩展运算符')

// 4、请详细说明var、let、const三种声明变量的方式之间的具体差别

// 5、最终运行结果——【20】
// var a = 10
// var obj = {
//     a: 20,
//     fn () {
//         setTimeout (() => {
//             console.log(this.a)
//         })
//     }
// }
// obj.fn()

// 6、简述Symbol类型的用途

// 7、说说什么是浅拷贝，什么是深拷贝

// 8、谈谈你是如何理解JS异步编程的，Event Loop是做什么的，什么是宏任务，什么是微任务

// 9、将下面异步代码使用Promise改进？
// setTimeout(function () {
//     var a = "hello"
//     setTimeout(function () {
//         var b = "lagou"
//         setTimeout (function () {
//             var c = "I ♥ U"
//             console.log(a + b + c)
//         }, 10)
//     }, 10)
// }, 10)

// new Promise(function (resolve, reject) {
//     resolve('hello')
// }).then(data => {
//     return data + 'lagou'
// }).then (data => {
//     return data + 'I ♥ U'
// }).then (data => {
//     console.log(data)
// })

// 10、请简述TypeScript与JavaScript之间的关系？

// 11、请谈谈你所认为的TypeScript优缺点？


// ********** 其他示例 ***********：
// （1）宏任务与微任务
//主线程直接执行
// console.log('1');
// //丢到宏事件队列中
// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// //微事件1
// process.nextTick(function() {
//     console.log('6');
// })
// //主线程直接执行
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     //微事件2
//     console.log('8')
// })
// //丢到宏事件队列中
// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })

// （2）参数默认值
// function foo(b, a=1) {
//     console.log(a)
//     console.log(b)
// }
// foo(8)

// (3)Map
// const m = new Map()
// const tom = { name: 'ss' }
// m.set(tom, 90)
// console.log(m)
// console.log(m.get(tom))
// // foreach 遍历
// m.forEach((value, key) => {
//     console.log(value, 'value')
//     console.log(key, 'key')
// })

// (4)Symbol定义对象的私有成员
// [4.1] 定义Symbol属性
// const obj = {}
// obj[Symbol()] = '123'
// obj[Symbol()] = '456'
// console.log(obj, 'symbol属性')
// [4.2] 计算属性名方式定义属性
// const obj = {
//     [Symbol()]: 123
// }
// console.log(obj)
// [4.3] 定义私有属性成员
// ************************ a.js ************************
// const name = Symbol()
// const person = {
//     [name]: 'ss',
//     say () {
//         console.log(this[name])
//     }
// }
// // *********************** b.js *************************
// // 在外部文件中不能再创建一个完全相同的Symbol,所以获取不到person[Symbol()]属性 
// // 在外部JS中只能调用普通属性成员
// person.say()

// (5)Symbol补充
//  [5.1]唯一性
// console.log(
//     // Symbol() === Symbol()
//     Symbol('ss') === Symbol('ss')
// )
// [5.2]Symbol.for()静态方法:方法接收字符串为参数
// const s1 = Symbol.for('ss')
// const s2 = Symbol.for('ss')
// // 相同字符串，返回相同Symbol的值
// console.log(s1 === s2, 'for方法')
// // 【PS：for()方法维护的是Symbol与字符串的对应关系，如传入的不是string,那么会自动转为string】
// console.log(Symbol.for(true) === Symbol.for('true'), '传的不是字符串')

// (6)for---of循环
const arr = [100, 200, 300, 400]
// for (const item of arr) {
//     console.log(item)
// }
// [6.1]for---of可以使用break终止循环
// for (const item of arr) {
//     console.log(item)
//     if (item > 100) {
//         break
//     }
// }
// [6.2]set遍历
// const s = new Set(['ss', 'ii'])
// for (const item of s) {
//     console.log(item, '循环set')
// }
// [6.3]map遍历
// const m = new Map()
// m.set('foo', '123')
// m.set('bar', '345')
// for (const item of m) {
//     // 遍历map，得到的item为数组，其中包含键和值
//     console.log(item)
// }
// // 通过解构来分别获取数组中的key属性名，与value属性值
// for (const [key, value] of m) {
//     console.log(key, 'key')
//     console.log(value, 'value')
// }

// (7)Iterator迭代器
// 新建set对象，并初始化值
// const set = new Set(['foo', 'bar', 'baz'])
// // 调用set对象的iterator方法，得到该对象的迭代器
// const iterator = set[Symbol.iterator]()
// // 通过迭代器中的next()方法去迭代set中的数据
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// (8)生成器函数Generator
// 定义生成器函数就是在普通的函数前面添加*号
// function * foo () {
//     console.log('zce')
//     return 100
// }
// const result = foo()
// // console.log(result)打印出来的是生成器对象，打印结果：Object [Generator] {}
// console.log(result.next()) 
// // 打印结果：zce { value: 100, done: true }

// （9）Promise
// promise实例接收一个函数为参数，函数内部接收两个参数resolve,reject,两者都代表一个函数
const promise = new Promise(function(resolve, reject){
    // 就是将Promise的状态修改为fulfilled——成功，将异步任务的操作结果通过resolve的参数传递出去
    resolve(100) 
    // 就是将Promise状态改为rejected——失败，失败的参数传递的是一个错误的对象，用来表示为什么失败
    // reject(new Error('promise rejected')) 
})
// 实例创建之后可以用then方法分别指定onfulfilled,onrejected函数,【then方法指定的回调函数会进入到回调队列中排队，等待同步任务执行完毕之后，再执行】
// then方法的作用就是给状态明确的promise对象添加回调函数
var promise2 = promise.then(function (value){
    // 第一个参数成功之后的回调函数
    console.log('resolved', value)
}, function (error) {
    console.log('rejected', error)
})
console.log('end')
console.log(promise2, 'then方法返回的也是promise对象')
// then方法会返回一个全新的Promise对象