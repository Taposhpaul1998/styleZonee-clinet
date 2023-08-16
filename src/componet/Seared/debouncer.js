export const debounce = (fn, delay) => {
    let time;
    return (...args) => {
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}