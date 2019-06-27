export function debounce (func, delay) {
    let timer 
    return function(...arges) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, arges)
        }, delay)
    }
}

export function findIndex (list, song) {
    return list.findIndex ((item) => {
        return item.id === song.id 
    })
}