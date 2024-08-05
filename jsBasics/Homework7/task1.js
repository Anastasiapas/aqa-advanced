function handleNum(number, evenCB, oddCB) {
    if (number % 2 === 0) {
        evenCB(number)
    } else {
        oddCB(number)
    }
}

function handleEven(number) {
    console.log(number + ' - this number is even');
}

function handleOdd(number) {
    console.log(number + ' - this number is odd');

}

handleNum(38, handleEven, handleOdd);
handleNum(29, handleEven, handleOdd);