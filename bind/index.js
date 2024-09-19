/**
 * bind改变this指向，只需要将传入的对象上放入这个函数，执行得到结果后在删除即可, 返回一个调用函数
 */
Function.prototype.myBind = function(context) {
    if (!context) throw new Error("context必传")
    let fn = Symbol()
    context[fn] = this
    return function (...args) {
        let result = context[fn](...args)
        delete context[fn]
        return result
    }
}

const base = 100

function sum(a, b, c) {
    return this.base + a + b + c
}

let world = {
    base: 100,
    sum
}

let kk = world.sum.bind({base: 200})
console.log(kk(1,2,3))