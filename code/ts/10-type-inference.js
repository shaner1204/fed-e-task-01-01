"use strict";
// 隐式类型推断
Object.defineProperty(exports, "__esModule", { value: true });
// TS 自动推断为 number 类型
var age = 14;
// 再赋值字符串的话，就会报错，因为已经推断为 number
// age = 'string'
// 如果无法推断类型，就判断为 any
var foo;
foo = 100;
foo = 'string';
// 建议为每个变量添加类型
//# sourceMappingURL=10-type-inference.js.map