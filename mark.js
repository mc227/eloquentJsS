/*
I'm trying to do the Raymond Gan thing of not looking at the solution
once I've seen it
*/
// let count = 1
// let total = 0
// while(count < 11) {
//     total = count + total
//     count = count + 1
// }
// console.log(total)

/*
 I saw the solution but I've forgotten it already
 the trick is learning by discovery.
 what am i 
 */
 // Function definitions
function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  function range(start, end, step = 1) {
    const result = [];
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  }
  
  // Example usage
  const numbers = range(1, 10);
  console.log(sum(numbers)); // Output: 55
  