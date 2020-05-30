// 类与接口

export {} // 确保其它示例没有成员冲突


// interface EatAndRun {
//     eat (food: string): void
//     run (distance: number): void
// }

// 不同的类型，实现相同的接口，都可以吃，跑
// 在类中使用 implements 去使用接口
// 在类型中必须有相应的成员,否则会报错
// class Person implements EatAndRun {
//     eat (food: string): void {
//         console.log(`优雅的进餐：${food}`)
//     }

//     run (distance: number) {
//         console.log(`直立行走：${distance}`)
//     }
// }

// class Animal implements EatAndRun {
//     eat (food: string): void {
//         console.log(`呼噜呼噜的吃：${food}`)
//     }

//     run (distance: number) {
//         console.log(`爬行:${distance}`)
//     }
// }

// 一个接口只约束一个能力
// 让一个类型同时去实现多个接口
interface Eat {
    eat (food: string): void
}
interface Run {
    run (distance: number): void
}

// 使用逗号的方式,同时使用 eat, run两个接口
class Person implements Eat, Run {
    eat (food: string): void {
        console.log(`优雅的进餐：${food}`)
    }

    run (distance: number) {
        console.log(`直立行走：${distance}`)
    }
}