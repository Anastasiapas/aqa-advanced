function setBreak(breakType, delay) {
    setTimeout(() => {
        console.log(`It's ${breakType}`)
    }, delay);
}

setBreak('Lunch time', 800);