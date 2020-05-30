"use strict";
// 任意类型 （弱类型）
Object.defineProperty(exports, "__esModule", { value: true });
// any 接收任意类型,不会有任意的类型检查
function stringfy(value) {
    return JSON.stringify(value);
}
stringfy('string');
stringfy(100);
stringfy(true);
var foo = 1100;
foo = 100;
foo.bar();
//# sourceMappingURL=09-any-types.js.map