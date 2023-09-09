This is my two some answer. 
brute force
```javascript
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
```
- there is a nested for loop so the time complexity is    O(n^2)
- the answer will always be in the form [i,j] so the space complexity is O(1)