/**
 * Call改变this指向，只需要将传入的对象上放入这个函数，执行得到结果后在删除即可
 */
Function.prototype.myCall = function(context, ...args) {
    if (!context) throw new Error("context必传")
    let fn = Symbol()
    context[fn] = this
    let result = context[fn](...args)
    delete context[fn]
    return result
}

const base = 100

function sum(a, b, c) {
    return this.base + a + b + c
}

let world = {
    base: 100,
    sum
}

console.log(world.sum(1,2,3))
console.log(world.sum.call({base: 1000}, 1,2,3))
console.log(world.sum.myCall({base: 10000}, 1,2,3))