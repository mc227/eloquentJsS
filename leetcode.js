// var longestCommonPrefix = function(strs) {
//     function areAllStringsEqual(array) {
//         let first = array[0]
//         for(let i = 1; i<array.length; i++) {
//             if(first !== array[i]){
//                 return false
//             }
//         }
//         return true
//     }
//     if(strs.length===1) {
//         return strs[0]
//     }
//     if(areAllStringsEqual(strs)){
//         return strs[0]
//     }
//     let firstWord = strs[0]
//     let prefix = ""
//     for(let i = 1; i <= firstWord.length; i++) {
//         let mapped = strs.map(s => s.substring(0,i))
//         if (areAllStringsEqual(mapped)) {
//             prefix = mapped[0]
//         } else {
//             console.log("No common prefix at index", i - 1);
//             break;
//         }
//     }
//     return prefix
// };
// // let words = ["flower","flow","flight"]
// // let words = ["a"]
// // let words = ["flower","flower","flower","flower"]
// let words = ["a","ac"]
// console.log(longestCommonPrefix(words))
// // console.log(longestCommonPrefix(words))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            if(nums[i]+nums[j]===target) {
                return [i,j]
            }
        }
    }
};

console.log(twoSum([2,7,11,15],9))
