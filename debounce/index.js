/**
 * 防抖，非常频繁的事件，合并成一次去计算，在指定的时间内执行一次，若周期内重新触发，重新计算
 */
function debounce(fn, wait = 50) {
    let clear = true
    let timer;
    return function () {
        if (clear) {
            fn()
            clear = false
        } else {
            window.clearTimeout(timer)
        }
        timer = window.setTimeout(() => {
            clear = true
        }, wait)
    }
}