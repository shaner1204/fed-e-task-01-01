"use strict";
// 原始数据类型
var a = 'foobar';
var b = 100; // NaN Infinity
var c = true; // false
// 严格模式下，string number boolean 默认不可以为空，非严格模式才可以设置为 null 或 undefined
// const d: string = null
// void 类型：一般是在函数没有返回值时，去标记函数返回值类型，只能是 null 或 undefined，
// 在严格模式下，只能是 undefined
// const e: void = null
var e = undefined;
var f = null;
var g = undefined;
// 报错是因为引入的标准库为 es5,要把配置文件中的 target 选项设置为 es2015
// Symbol 是 JS 中的一个内置对象，它是 es6 中新增的，内置对象自身也是有类型，其类型在 TS 中已经定义好了
var h = Symbol();
// const error: string = 100
//# sourceMappingURL=02-primitive-types.js.map