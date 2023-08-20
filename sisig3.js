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

console.log(sum(range(1, 10)));