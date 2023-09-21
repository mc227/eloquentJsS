/**
 * I'm writing a for loop with sum and total.
 * I'm also supposed to use count and 
 * I'm supposed to console.log in the end
 */

// let total = 0, count = 1
// for(let i = 0; i < 10; i++) {
//     total+=count
//     count++
// }
// console.log(total)

// what about a while loop

// let total = 0, count = 1

// while(count <= 10) {
//     total += count
//     count++
// }

// console.log(total)

// I'm suppsed to have this work

function sum(array) {
    let result = 0
    for(let item of array){
        result+=item
    }
    return result
}

function range(start, end) {
    let result = []
    while(start <= end) {
        result.push(start)
        start+=1
    }
    return result
}

console.log(sum(range(1, 10)));