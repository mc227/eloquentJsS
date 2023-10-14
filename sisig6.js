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

// i just want to do the repeat function again
function repeat(n, action) {
    for(let i = 0; i < n; i++) {
        action(i)
    }
}

// repeat(3, console.log)

// let labels = []
// repeat(5, l => {
//     return labels.push(`Unit ${l+1}`)
// })
// console.log(labels)

function greaterThan(n) {
    return m => m > n
}

let greaterThan10 = greaterThan(10)
// console.log(greaterThan10(11))

function noisy(f) {
    return (...args) => {
        console.log("calling ", args)
        let result = f(...args)
        console.log("called with ", args, ", returned ", result)
        return result
    }
}

// console.log(noisy(Math.min)(1,2,3))

// Define a function called 'unless' that takes two arguments: 'test' and 'then'.
function unless(test, then) {
    // Check if the 'test' function returns false (negation of 'test' result).
    if (!test) {
        // If the 'test' is false, execute the 'then' function.
        then();
    }
}

// Call the 'repeat' function three times with the following callback function.
// repeat(3, n => {
//     // Use the 'unless' function to check if 'n' is even.
//     unless(n % 2 == 1, () => {
//         // If 'n' is not odd (i.e., it's even), log a message.
//         console.log(`${n} is even`);
//     });
// })


// ['A','B'].forEach(l => {
//     return console.log(l)
// })

const SCRIPTS = require('./script.js');


function filter(array, test) {
    let passed = []
    for(let item of array) {
        if(test(item)){
            passed.push(item)
        }
    }
    return passed
}

// console.log(filter(SCRIPTS, l => l.living))

// console.log(SCRIPTS.filter(script => script.direction == "ttb"))

// create map function
// filter out all rtl scripts
// filter out just the names from the array of objects

function map(array, transform) {
    let mapped = []
    for(let item of array) {
        mapped.push(transform(item))
    }
    return mapped
}

let rtlScripts = SCRIPTS.filter(script => script.direction === "rtl")
// console.log(map(rtlScripts, l => l.name))

function reduce(array, combine, start) {
    let current = start
    for (let item of array){
        current = combine(current,item)
    }
    return current
}

// console.log(reduce([1,2,3,4],(a,b) => a+b,0))
// console.log([1,2,3,4].reduce((a,b)=>a+b))
// To use reduce (twice) to find the script with the most characters, we can write something like this:

