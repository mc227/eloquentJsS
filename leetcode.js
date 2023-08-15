var longestCommonPrefix = function(strs) {
    function areAllStringsEqual(array) {
        let first = array[0]
        for(let i = 1; i<array.length; i++) {
            if(first != array[i]){
                return false
            }
        }
        return true
    }
    if(strs.length==1) {
        return strs[0]
    }
    if(areAllStringsEqual(strs)){
        return strs[0]
    }
    let firstWord = strs[0]
    let prefix = ""
    for(let i = 1; i < firstWord.length; i++) {
        let mapped = []
        mapped = strs.map(s => s.substring(0,i))
        if (areAllStringsEqual(mapped)) {
            prefix = mapped[0]
        } 
    }
    return prefix
};
// let words = ["flower","flow","flight"]
// let words = ["a"]
// let words = ["flower","flower","flower","flower"]
let words = ["a","ac"]
console.log(longestCommonPrefix(words))
// console.log(longestCommonPrefix(words))