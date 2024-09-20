function debounce(func, wait) {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}

let fn = debounce(() => {
    console.log('run')
}, 1000)

t = setInterval(() => {
    console.log('tick')
    fn()
}, 10)
setTimeout(() => {
    console.log('stop')
    clearInterval(t)
}, 2000)