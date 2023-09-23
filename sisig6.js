// /**
//  * I'm writing a for loop with sum and total.
//  * I'm also supposed to use count and 
//  * I'm supposed to console.log in the end
//  */

// // let total = 0, count = 1
// // for(let i = 0; i < 10; i++) {
// //     total+=count
// //     count++
// // }
// // console.log(total)

// // what about a while loop

// // let total = 0, count = 1

// // while(count <= 10) {
// //     total += count
// //     count++
// // }

// // console.log(total)

// // I'm suppsed to have this work

// function sum(array) {
//     let result = 0
//     for(let item of array){
//         result+=item
//     }
//     return result
// }

// function range(start, end) {
//     let result = []
//     while(start <= end) {
//         result.push(start)
//         start+=1
//     }
//     return result
// }

// console.log(sum(range(1, 10)));

// It is common for a program to do something a given number of times. 
// You can write a for loop for that, like this:

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// Can we abstract “doing something N times” as a function? 
// Well, it’s easy to write a function that calls console.log N times.

// function repeatConsoleLog(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// repeatConsoleLog(10)

/**
 * But what if we want to do something other 
 * than logging the numbers? Since “doing something” 
 * can be represented as a function and functions 
 * are just values, we can pass our action as a function value.
 */

function repeat(action, n){
    for(let i = 0; i < n; i++){
        action(i)
    }
}

// repeat(console.log, 10)

labels = []

repeat(i => 
    {
        return labels.push(`Unit ${i+1}`)
    },5)

console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]