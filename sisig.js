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

// function countBs(string) {
//     let count = 0
//     for(let i = 0; i < string.length; i++) {
//         if (string[i]=="B"){
//             count++
//         }
//     }
//     return count
// }

// function countChar(string,char){
//     let count = 0
//     for(let i = 0; i < string.length; i++) {
//         if (string[i]==char){
//             count++
//         }
//     }
//     return count
// }

// let listOfNumbers = [2,3,5,7,11]
// console.log(listOfNumbers[2])

// let doh = "Doh"
// console.log(typeof doh.toUpperCase())

// let sequence = [1,2,3]
// sequence.push(4)
// sequence.push(5)
// console.log(sequence)

// let day1 = {
//     squirrel:false,
//     events:["work","touched tree","pizza","running"]
// }
// console.log(day1.squirrel)
// console.log(day1.wolf)
// day1.wolf=false
// console.log(day1.wolf)

// let descriptions = {
//     work:"Went to work",
//     "touched tree": "Touched a tree"
// }

// let anObject = {left:1, right:2}
// console.log(anObject.left)
// delete anObject.left
// console.log(anObject.left)
// console.log("left" in anObject)
// console.log("right" in anObject)

// console.log(Object.keys({x:0,y:0,z:1}))

// let anObject = {a:1,b:2}
// Object.assign(anObject,{b:3,c:4})
// console.log(anObject)

// console.log(typeof [])
// console.log(typeof {})
// let journal = [
//     {
//         events:["pooped", "showered","ran","ate"],
//         squirrel:false
//     },{
//         events:["pooped", "showered","ran","ate"],
//         squirrel:false
//     },{
//         events:["pooped", "showered","ran","ate"],
//         squirrel:false
//     },
// ];

// let object1 = {value:10}
// let object2 = object1
// let object3 = {value:10}

// console.log(object1 == object3)

// object1.value = 15
// console.log(object2.value)

// const score = {home:0, visitor:0}
// score.home=1
// score = {home:1, visitor:1}
// console.log(score)

// let journal = []

// function addEntry(events,squirrel) {
//     journal.push({events,squirrel})
// }

// console.log(journal)

// addEntry(["ran", "prayed", "ate", "slept"],false)

// addEntry(["ran", "prayed", "ate", "pooped"],false)

// console.log(journal)

function phi(table){
    return (table[3]*table[0] - table[1]*table[2])/(Math.sqrt(5*85*80*10))
}

console.log(phi([76,9,4,1]))
