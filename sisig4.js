/*
This code calculates the sum of integers from 1 to 10 and prints the result, which is 55.
*/

let count = 1, total = 0
while(count <= 10){
    total += count
    count++
}
// console.log(total)

function sum(array) {
    let result = 0
    for(let item of array) {
        result += item
    }
    return result
}

function range(start,end) {
    let result = []
    while(start<=end) {
        result.push(start)
        start++
    }
    return result
}

// console.log(sum(range(1, 10)));

for(let i = 0; i < 10; i++) {
    // console.log(i)
}

function repeatLog(n) {
    for(let i = 0; i < n; i++) {
        console.log(i)
    }
}

// repeatLog(10)

/*
But what if we want to do something 
other than logging the numbers? 
Since “doing something” 
can be represented as a 
function and functions 
are just values, we can 
pass our action as a function value.
*/

