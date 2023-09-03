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

