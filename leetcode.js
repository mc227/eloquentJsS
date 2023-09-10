


// let emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// // let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

// var numUniqueEmails = function(emails) {
//     let domains = emails.map(s=>{return s.substring(s.indexOf('@'))})
//     console.log(domains)
//     let localNames = emails.map(s=>{return s.includes("+") ? s.substring(0, s.indexOf("+")):s.substring(0, s.indexOf("@"))})
//     console.log(localNames)
//     let localNames2 = localNames.map(s=>{return s.includes(".")?s.replaceAll(".",""):s})
//     let result = []
//     for(let i = 0; i < localNames2.length; i++){
//         result.push(localNames2[i]+domains[i])
//     }
//     let result2 = result.filter((item,
//         index) => {return result.indexOf(item) === index});
//     return result2.length
// };


// console.log(numUniqueEmails(emails))

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//     let result = 0
//     console.log(s.includes("I"))
//     s.replace("I")
//     console.log(s)
// };

// console.log(romanToInt("III"))


// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//     let result = 0
//     let CM = s.split("CM").length-1
    
//     s= s.replace(/CM/g,"")
//     if (CM > 0){
//         result += 900
//     }
    
//     let CD = s.split("CD").length-1
//     s = s.replace(/CD/g,"")
//     if (CD > 0) {
//         result += 400
//     }
    
//     let XC = s.split("XC").length-1
//     s = s.replace(/XC/g,"")
//     if (XC > 0) {
//         result += 90
//     }
    
//     let XL = s.split("XL").length-1
//     s = s.replace(/XL/g,"")
//     if(XL > 0) {
//         result += 40
//     }
    
//     let IX = s.split("IX").length-1
//     s = s.replace(/IX/g,"")
//     if(IX > 0) {
//         result += 9
//     }
    
//     let IV = s.split("IV").length-1
//     s = s.replace(/IV/g,"")
//     if(IV > 0) {
//         result += 4
//     }
    
//     let M = s.split("M").length-1
//     s = s.replace(/M/g,"")
//     if(M > 0){
//         result += (1000*M)
//     }
    
//     let D = s.split("D").length - 1
//     s = s.replace(/D/g,"")
//     if (D > 0) {
//         result += (500*D)
//     }
    
//     let C = s.split("C").length - 1
//     s = s.replace(/C/g,"")
//     if (C > 0) {
//         result += (100*C)
//     }
    
//     let L = s.split("L").length - 1
//     s = s.replace(/L/g,"")
//     if(L > 0) {
//         result += (50*L)
//     }
    
//     let X = s.split("X").length - 1
//     s = s.replace(/X/g,"")
//     if(X > 0) {
//         result += (10*X)
//     }
    
//     let V = s.split("V").length - 1
//     s = s.replace(/V/g,"")
//     if(V > 0) {
//         result += (5*V)
//     }
    
//     let I = s.split("I").length - 1
//     s = s.replace(/I/g,"")
//     if(I > 0) {
//         result += (1*I)
//     }
//     return result
// };


// console.log(romanToInt("I"))

function twoSum(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]

        if(map.has(complement)){
            return [map.get(complement), i]
        }

        map.set(nums[i],i)
    }
    return null
}

console.log(twoSum([2,7,11,15],9))