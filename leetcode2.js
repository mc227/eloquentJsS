/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    function areAllStringsEqual(array) {
        let first = array[0];
        for (let i = 1; i < array.length; i++) {
            if (first !== array[i]) {
                return false;
            }
        }
        return true;
    }

    if (strs.length === 1) {
        return strs[0];
    }

    if (areAllStringsEqual(strs)) {
        console.log("All strings are equal:", strs[0]);
        return strs[0];
    }

    let firstWord = strs[0];
    let prefix = "";
    for (let i = 1; i <= firstWord.length; i++) {
        let mapped = strs.map(s => s.substring(0, i));
        console.log("Mapped strings:", mapped);

        if (areAllStringsEqual(mapped)) {
            console.log("Common prefix found:", mapped[0]);
            prefix = mapped[0];
        } else {
            console.log("No common prefix at index", i - 1);
            break;
        }
    }
    return prefix;
};

// Test cases
const strings1 = ['flower', 'flow', 'flight'];
console.log("Longest Common Prefix:", longestCommonPrefix(strings1)); // Output: "fl"

const strings2 = ['dog', 'racecar', 'car'];
console.log("Longest Common Prefix:", longestCommonPrefix(strings2)); // Output: ""

const strings3 = ['a','ac'];
console.log("Longest Common Prefix:", longestCommonPrefix(strings3)); // Output: ""