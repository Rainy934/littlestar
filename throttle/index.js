function throttle (func, wait) {
    let lastTime;
    return function (...args) {
        if (!lastTime || (Date.now() - lastTime > wait)) {
            func.apply(this, args)
            lastTime = Date.now()
        }
    }
}

let fn = throttle((age) => {
    console.log(age + 1)
}, 1000)

let age = 10

setInterval(() => {
    fn(age++)
}, 100)