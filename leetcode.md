# LeetCode Solutions

## Problem 1: Two Sum

### Solution 1

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
**Explanation:**
- Solution 1 uses a brute-force approach with nested for loops.
- It iterates through the `nums` array, checking all possible pairs of elements.
- The time complexity is O(n^2) due to the nested loops.
- The space complexity is O(1) because it returns the answer as `[i, j]`.
  
### Solution 2

```javascript
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

}
```
**Explanation:**
- This solution utilizes a more efficient approach with a `Map` data structure to store elements from the `nums` array along with their corresponding indices.
- It iterates through the `nums` array only once.
- The time complexity is O(n), where 'n' is the length of the `nums` array.
- The space complexity is O(n) because it uses a `Map` to store elements and their indices.


### Solution 3

```javascript
function twoSum(nums, target) {
    const numSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numSet.has(complement)) {
            return [nums.indexOf(complement), i];
        }

        numSet.add(nums[i]);
    }
    
    return []; // Return an empty array if no solution is found.
}

```
**Explanation:**
- We use a Set called numSet to store the elements from the nums array.

- We iterate through the nums array just like in the previous solution.

- For each element, we calculate its complement by subtracting it from the target.

- We check if the numSet already contains the complement. If it does, we return an array containing the indices of the complement and the current element.

- If no solution is found after iterating through the entire array, we return an empty array to indicate that there is no valid solution.

- This solution has the same time complexity of O(n) as the previous solution but uses slightly less memory because it doesn't store indices in the data structure. It's still a very efficient and widely used approach to solve the Two Sum problem in JavaScript.


### Solution 4

```javascript
function twoSum(nums, target) {
    const numMap = new Map();

    return nums.findIndex((num, index) => {
        const complement = target - num;
        if (numMap.has(complement)) {
            return true; // Found a pair with the target sum.
        }
        numMap.set(num, index);
        return false;
    }) !== -1
        ? [numMap.get(target - nums[nums.findIndex((num, index) => numMap.has(target - num))]), nums.findIndex((num, index) => numMap.has(target - num))]
        : [];
}
```
**Explanation:**
- We use the findIndex method to iterate through the nums array while keeping track of elements and their indices in the numMap.

- For each element, we calculate its complement and check if it exists in the numMap.

- If a complement is found, we return true to stop the iteration, and we have found a pair with the target sum.

- We use the ternary operator to construct the result array based on whether we found a pair or not.

- This solution maintains the O(n) time complexity and O(n) space complexity while being more concise. However, keep in mind that it may not be as intuitive as Solution 2 for some readers due to the use of findIndex and Map in a more complex manner.




