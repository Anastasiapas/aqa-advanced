
const size =['small', 'medium', 'large', 'extra large']
size.splice(3,1 , 'new large')
console.log(size)


let numbers = [2,6,6,3,4,3,6,8]
let numbers2= numbers.map(number =>number*number)
let numberFind= numbers.find(number=> number<6)
console.log(numberFind)