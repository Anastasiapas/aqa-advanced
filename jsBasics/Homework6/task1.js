//function declaration
function squareCalculation1(width, height){
    return width*height;
}
console.log (squareCalculation1(5, 10));

//function expression
const squareCalculation2 = function (width, height){
    return width*height;
}
console.log (squareCalculation2(5, 10));

//arrow function
const squareCalculation3 = (width, height) => width*height

console.log (squareCalculation3(5, 10));
