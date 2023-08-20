// sum 1 to 10
// let count = 1, total = 0
// while(count <=10) {
//     total +=count
//     count++
// }
// console.log(total)
// 55

// create sum and range functions that will output 55 for console.log(sum(range(1, 10)));

function sum(array) {
    let total = 0
    for(let element of array) {
        total += element
    }
    return total
}

function range(start, end) {
    let result = []
    while (start <=end) {
        result.push(start)
        start++
    }
    return result
}

// console.log(sum(range(1, 10)));

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// function consoleN(n) {
//     for(let i = 0; i < n; i++) {
//         console.log(i)
//     }
// }

// consoleN(5)

function repeatLog(n) {
    for(let i = 0; i < n; i++) {
        console.log(i)
    }
}

// repeatLog(5)

function repeat(n,action) {
    for(let i = 0; i < n; i++) {
        action(i)
    }
}

// repeat(3,console.log)

let labels = []

repeat(5, i=>{
    labels.push(`Unit ${i+1}`)
})

// console.log(labels)

// higher ordered functions allow us to abstract over actions and not just vales
// one way is for functions creating other functions

