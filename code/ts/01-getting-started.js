"use strict";
//  可以完全按照 JavaScript 标准语法编写代码 
var hello = function (name) {
    console.log("Hello, " + name);
};
hello('TypeScript');
// 使用基本过程：安装TS模块，这个模块提供tsc命令，这个命令的作用就是编译TS文件，在编译过程中TS会先检查代码中的类型使用异常，然后会移除掉类型注解扩展的语法，并自动转换EcmaScript的新特性
// 不指定类型时，参数会被隐式推断为 any 类型，但是在严格模式下是不允许的，严格模式下需要为每个成员指定明确类型
// 使用 tsc 命令去编译某一个指定文件时，其配置文件是不会生效的，只有直接运行 tsc 去编译整个项目时，才会起作用 
// console 是浏览器中 DOM 的内置对象, TS 中将 DOM、BOM 都归为 DOM 中
//# sourceMappingURL=01-getting-started.js.map