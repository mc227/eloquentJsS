// const sisig = function(factor){
//     const ingredient = function(amount,unit,name){
//         let ingredientAmount = factor * amount
//         if (ingredientAmount > 1) {
//             unit += "s"
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`)
//     }

//    ingredient(1,"pound","pork belly")
//    ingredient(3,"pc","chicken liver")
//    ingredient(1,"pc","big red onion")
//    ingredient(1,"pc","chili pepper")
//    ingredient(1/2,"tablespoon","soy sauce")
//    ingredient(1/8,"tablespoon","ground black pepper")
// }

// sisig(1)



// function findSolution(target) {
//     function find(current, history){
//         if (current == target) {
//             return history
//         } else if (current > target) {
//             return null
//         } else {
//             return find(current+5,`(${history} + 5)`) || find(current*3,`(${history} * 3)`)
//         }
//     }
//     return find(1,"1")
// }


// console.log(findSolution(24))


// 007 Cows
// 011 Chickens

// function printFarmInventory(cows,chicken){
//     let cowString = String(cows)
//     while (cowString.length < 3) {
//         cowString = "0" + cowString
//     }
//     let chickenString = String(chicken)
//     while (chickenString.length < 3) {
//         chickenString = "0" + chickenString
//     }
//     return cowString + " Cows\n" + chickenString + " Chicken"
// }

// console.log(printFarmInventory(7,11))


// so they want to extend the code above
// function printZeroPaddedWithLabel(number, label) {
//     let labelString = String(number)
//     while (labelString.length < 3) {
//         labelString = "0" + labelString
//     }
//     console.log(labelString +" "+label)
// }

// function printFarmInventory(cows,chicken,pigs){
//     printZeroPaddedWithLabel(cows,"Cows")
//     printZeroPaddedWithLabel(chicken,"Chickens")
//     printZeroPaddedWithLabel(pigs,"Pigs")
// }

// printFarmInventory(7,11,3)


// function zeroPad(number, width) {
//     let string = String(number)
//     while(string.length < width) {
//         string = "0" + string
//     }
//     return string
// }
    
// function printFarmInventory(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows,3)} Cows`)
//     console.log(`${zeroPad(chickens,3)} Chickens`)
//     console.log(`${zeroPad(pigs,3)} Pigs`)
// }
    
// // printFarmInventory(7, 16, 3);

// function min(first, second) {
//     if (first >= second) {
//         return second
//     } else {
//         return first
//     }
// }

// function isEven(number) {
//     if (number == 0) {
//         return true
//     } else if(number == 1) {
//         return false
//     } else if(number<0){
//         return isEven(-number)
//     } else {
//         return isEven(number-2)
//     }
// }

// console.log(isEven(75))