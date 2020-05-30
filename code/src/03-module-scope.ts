// 作用域问题

// 不同文件中会有相同变量名称，定义一个上一个文件已经存在的变量
// 会报变量已经存在的错误，因为 a 变量是一个全局变量

// 解决办法：把 a 变量装到不同的作用域中
// const a = 123

// 一、创建一个立即执行函数，创建一个单独的作用域
(function () {
    const a = 123
})

// 二、使用 export 导出，这个文件就会作为一个模块，模块是有单独的模块作用域，
const a = 123
// 注：{} 只是 export 的语法，并不是导出一个空对象
export {}
