function longest_str_in_array(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}

var longestCommonPrefix = function(strs) {
    // look for element that is the longest
    // and go from there
    // console.log(longest_str_in_array(strs))
    let mapped = []
    let prefix = ""
    mapped = strs.map(s => s.substring(0,1))
    console.log(mapped)
    for(let i = 1; i < mapped.length; i++){
        if (mapped[0] === mapped[i])  {
            prefix = mapped[0]
        }
    }
    console.log(prefix)

    mapped = strs.map(s=>s.substring(0,2))
    console.log(mapped)
};
let words = ["flower","flow","flight"]
longestCommonPrefix(words)
// console.log(longestCommonPrefix(words))