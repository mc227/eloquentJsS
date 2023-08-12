var longestCommonPrefix = function(strs) {
    // let first = strs[0].substring(0,1)
    // console.log(first)
    // let prefix = ""
    // for(let i = 1; i <  strs.length; i++) {
    //     if (strs[0].substring(0,1) == strs[i].substring(0,1)) {
    //         prefix = strs[0].substring(0,1)
    //     }
    // }
    // return prefix
    var first = strs[0]
    let prefix = ""
    console.log("first word: ", first)
    // loop through the substring of the first word
    for (let i = 1; i <= first.length; i++) {
        console.log(first.substring(0,i))
        for (let j = 1; j < strs.length; j++) {
            console.log("****************")
            console.log("comparing ",first.substring(0,i)," with ", strs[j].substring(0,i))
            if (first.substring(0,i) === strs[j].substring(0,i)) {
                prefix = first.substring(0,i)
            }
            
        }
        console.log("prefix: ", prefix)
    }
};
let words = ["flower","flow","flight"]
longestCommonPrefix(words)
// console.log(longestCommonPrefix(words))