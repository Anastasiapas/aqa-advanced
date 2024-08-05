const numbersList = [1,10,14,2,4,5,43,34];

const newNumbersList = [...numbersList];
const sortedNewNumbersList = newNumbersList.slice().sort((a, b) => a - b);

console.log('Copied array:', numbersList);
console.log('Sorted array:', sortedNewNumbersList);