/*
A function definition is a regular binding where the value of the binding is a function. 
For example, the following code defines square to refer to a function that produces the square of a given number.
*/

// function square(number) {
//     return number*number
// }

// const square = function(x) {
//     return x*x
// }

// console.log(square(5))

const makeNoise = function() {
    return("oh Hi Mark")
}

const power = function(base, pow) {
    return base**pow
}

console.log(makeNoise())
console.log(power(2,10))