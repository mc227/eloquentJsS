var longestCommonPrefix = function(strs) {
    let first = strs[0]
    let prefix = first.substring(0,1)
    for(let i = 1; i<strs.length; i++) {
        console.log(prefix == strs[i].substring(0,1))
    }
    // since it is true, i update prefix
    prefix = first.substring(0,2)
    for(let i = 1; i<strs.length; i++) {
        console.log(prefix == strs[i].substring(0,2))
    }
    // since it is true, i update prefix
    prefix = first.substring(0,3)
    for(let i = 1; i<strs.length; i++) {
        console.log(prefix == strs[i].substring(0,3))
    }
    // since there is a false
};
let words = ["flower","flow","flight"]
longestCommonPrefix(words)