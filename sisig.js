// var JOURNAL = [
//     {"events":["carrot","exercise","weekend"],"squirrel":false},
//     {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
//     {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
//     {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
//     {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
//     {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
//     {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
//     {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
//     {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
//     {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
//     {"events":["brushed teeth","computer","work"],"squirrel":false},
//     {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
//     {"events":["brushed teeth","work"],"squirrel":false},
//     {"events":["cauliflower","reading","weekend"],"squirrel":false},
//     {"events":["bread","brushed teeth","weekend"],"squirrel":false},
//     {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
//     {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
//     {"events":["spaghetti","nachos","work"],"squirrel":false},
//     {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
//     {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
//     {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
//     {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
//     {"events":["potatoes","exercise","work"],"squirrel":false},
//     {"events":["pizza","ice cream","computer","work"],"squirrel":false},
//     {"events":["lasagna","ice cream","work"],"squirrel":false},
//     {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
//     {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
//     {"events":["potatoes","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","work"],"squirrel":false},
//     {"events":["pizza","beer","work","dentist"],"squirrel":false},
//     {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
//     {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
//     {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
//     {"events":["lasagna","peanuts","work"],"squirrel":true},
//     {"events":["pizza","work"],"squirrel":false},
//     {"events":["potatoes","exercise","work"],"squirrel":false},
//     {"events":["brushed teeth","exercise","work"],"squirrel":false},
//     {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
//     {"events":["pizza","cycling","weekend"],"squirrel":false},
//     {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
//     {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
//     {"events":["pizza","peanuts","candy","work"],"squirrel":true},
//     {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
//     {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
//     {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
//     {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
//     {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
//     {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
//     {"events":["bread","candy","work"],"squirrel":false},
//     {"events":["potatoes","nachos","work"],"squirrel":false},
//     {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
//     {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
//     {"events":["brussel sprouts","running","work"],"squirrel":false},
//     {"events":["brushed teeth","work"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
//     {"events":["candy","brushed teeth","work"],"squirrel":false},
//     {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
//     {"events":["bread","brushed teeth","weekend"],"squirrel":false},
//     {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
//     {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
//     {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","work"],"squirrel":false},
//     {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["pizza","brushed teeth","work"],"squirrel":false},
//     {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
//     {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
//     {"events":["brushed teeth","running","work"],"squirrel":false},
//     {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
//     {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
//     {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
//     {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
//     {"events":["carrot","reading","weekend"],"squirrel":false},
//     {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
//     {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
//     {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
//     {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
//     {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
//     {"events":["lettuce","brushed teeth","work"],"squirrel":false},
//     {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
//     {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
//   ];
  

// // let journal = []

// // function addEntry(events,squirrel) {
// //     journal.push({events,squirrel})
// // }

// // addEntry(["pooped", "1","2"],true)
// // console.log(journal)

// function phi(table) {
//     return (table[3]*table[0]-table[1]*table[2])/
//     Math.sqrt((table[2]+table[3])*
//     (table[0]+table[1])*
//     (table[1]+table[3])*
//     (table[0]+table[2]))
// }

// // console.log(phi([76,9,4,1]))

// // console.log(JOURNAL.length) // 3 month journal

// /**
//  * To extract a two-by-two table for a 
//  * specific event from the journal, 
//  * we must loop over all the entries 
//  * and tally how many times the event 
//  * occurs in relation to squirrel 
//  * transformations.
//  */

// // function tableFor(event,journal) {
// //     let table = [0,0,0,0]
// //     for(let i = 0; i < journal.length; i++) {
// //         let index = 0
// //         let entry = journal[i]
// //         if (entry.events.includes(event)) index+=1
// //         if (entry.squirrel) index+=2
// //         table[index] += 1
// //     }
// //     return table
// // }

// function tableFor(event,journal) {
//     let table = [0,0,0,0]
//     for(let i = 0; i < journal.length; i++) {
//         let index = 0
//         let entry = journal[i]
//         if (entry.events.includes(event)) index+=1
//         if (entry.squirrel) index+=2
//         table[index] += 1
//     }
//     return table
// }

// // console.log(tableFor("pizza", JOURNAL))

// // for (let i = 0; i < JOURNAL.length; i++) {
// //     console.log(JOURNAL[i].events)
// // }

// // for (let entry of JOURNAL) {
// //     console.log(`${entry.events.length} events`)
// // }

// /**
//  * how do we that
//  * find every unique event in the JOURNAL data structure
//  */

// function journalEvents(journal) {
//     let events = []

//     for(let entry of journal) {
//         for (let event of entry.events) {
//             if (!events.includes(event)) events.push(event)
//         }
//     }
//     return events
// }

// // console.log(journalEvents(JOURNAL))

// /**
//  * i can list all of the events..
//  * how can i see all of the correlations
//  */

// // console.log(phi(tableFor("pizza", JOURNAL)))

// // for (let event of journalEvents(JOURNAL)){
// //     console.log(event+": "+ phi(tableFor(event, JOURNAL)))
// // }

// /**
//  *  Let’s filter the results to show only correlations greater than 0.1 or less than –0.1.
//  */

// // for (let event of journalEvents(JOURNAL)){
// //     let correlation = phi(tableFor(event, JOURNAL))
// //     if (correlation > 0.1 || correlation < -0.1) {
// //         console.log(event+": "+ correlation)
// //     }
// // }

// for (let entry of JOURNAL) {
//     if (entry.events.includes("peanuts")&&!entry.events.includes("brushed teeth")){
//         entry.events.push("peanut breath")
//     }
// }

// // console.log(phi(tableFor("peanut breath", JOURNAL)))

// let todoList =["Mirars","Costpoint","poop"]

// function rememberTask(task) {
//     todoList.push(task)
// }

// function getTask() {
//     return todoList.shift()
// }

// function rememberUrgently(task) {
//     todoList.unshift(task)
// }

// // let list = [1,2,3,2,1]
// // console.log(list.indexOf(2))
// // console.log(list.lastIndexOf(2))
// // console.log(list.slice(2))

// function remove(array, index) {
//     return array.slice(0,index).concat(array.slice(index+1))
// }

// // let list = ["a","b","c","d","e"]
// // console.log(remove(list,2))

// // console.log("coconuts".slice(4,7))
// // console.log("coconut".indexOf("u"))
// // console.log("one two three".indexOf("ee"))
// // console.log("   okay\n".trim())
// // console.log(String(6).padStart(11,"Oh Hi Mark"))
// let sentence = "Secretarybirds specialize in stomping";
// // console.log(sentence.split(" ").join("."))

// // console.log("LA".repeat(3))
// // console.log("abc"[1])

// // function max(...numbers) {
// //     let highest = -Infinity
// //     for(let number of numbers) {
// //         if (number > highest) highest = number
// //     }
// //     return highest
// // }

// // console.log(max(1,2,3))

// let words = ["it","is","only"]
// // console.log(...words)

// function randomPointOnCircle(radius) {
//     let angle = Math.random()*2*Math.PI
//     return {x:radius*Math.cos(angle), y:radius*Math.sin(angle)}
// }
// // console.log(randomPointOnCircle(2))
// // console.log(Math.random())
// // console.log(Math.random())
// // console.log(Math.random())
// // console.log(Math.random())
// // console.log(Math.floor(Math.random()*10))
// // function phi(table) {
// //     return (table[3] * table[0] - table[2] * table[1]) /
// //       Math.sqrt((table[2] + table[3]) *
// //                 (table[0] + table[1]) *
// //                 (table[1] + table[3]) *
// //                 (table[0] + table[2]));
// //   }

// function phi([n00,n01,n10,n11]){
//     return (n11*n00-n10*n01)/
//     Math.sqrt((n10+n11)+(n00+n01)+(n01+n11)+(n00+n10))
// }

// let {name}={name:"Faraji",age:23}
// // console.log(name)

// let string = JSON.stringify({"events":["carrot","exercise","weekend"],"squirrel":false})
// // console.log(string)

// // console.log(JSON.parse(string).events)

// function range(start,end,step=1){
//     if (start < end) {
//         let result = []
//         let i = start
//         while(i <= end) {
//             result.push(i)
//             i = i+ step
//         }
//         return result
//     } else {
//         let result = []
//         let i = start
//         while(i >= end) {

//             result.push(i)
//             i = i + step
//         }
//         return result
//     }
// }

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // console.log(range(1,10))

// function sum(numbers) {
//     let result = 0
//     for(let number of numbers) {
//         result += number
//     }
//     return result
// }

// // console.log(sum(range(1,10)))
// Your code here.

function range(start,end,step=1){
    if (start < end) {
        let result = []
        let i = start
        while(i <= end) {
            result.push(i)
            i = i+ step
        }
        return result
    } else {
        let result = []
        let i = start
        while(i >= end) {

            result.push(i)
            i = i + step
        }
        return result
    }
}
function sum(numbers) {
    let result = 0
    for(let number of numbers) {
        result += number
    }
    return result
}
// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55

/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//     if (n==1) return true
//     else if (n > 1 && n < 10) return false
//     else {
//         return isHappy(getSumOfSquares(n))
//     }
// };

// function getSumOfSquares(number){
//     let len = String(number).length
//     let foo = []
//     for(let i = 0; i < len; i++) {
//         foo.push(String(number)[i])
//     }
//     // Convert each string element to a number, square it, and sum the squares
//     const sumOfSquaredElements = foo.reduce((sum, strNum) => {
//         const num = parseFloat(strNum); // Convert the string to a number
//         const squaredNum = num * num;   // Square the number
//         return sum + squaredNum;        // Add to the running sum
//     }, 0);
//     return sumOfSquaredElements      
// }

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var hasCycle = function(head) {
    
// };
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// function hasCycle(head) {
//     if (!head || !head.next) {
//         return false; // No cycle if there are less than 2 nodes
//     }

//     let slow = head;
//     let fast = head;

//     let steps = 0; // Added for visualization

//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         steps++; // Count the steps for visualization

//         if (slow === fast) {
//             console.log(`Cycle detected after ${steps} steps`); // Show steps when cycle is detected
//             return true; // Found a cycle
//         }
//     }

//     console.log(`No cycle detected after ${steps} steps`); // Show steps when no cycle is detected
//     return false; // No cycle found
// }

// // Create a linked list from the array values [3, 2, 0, -4]
// const nodes = [
//     new ListNode(3),
//     new ListNode(2),
//     new ListNode(0),
//     new ListNode(-4)
// ];

// for (let i = 0; i < nodes.length - 1; i++) {
//     nodes[i].next = nodes[i + 1];
// }
// // To check if there is a cycle, call the hasCycle function with the head node
// const head = nodes[0];
// const result = hasCycle(head);
// console.log(result);

// function reverseArray(array) {
//     let result = []
//     for(let i = array.length-1; i >=0 ; i--) {
//         result.push(array[i])
//     }
//     return result
// }

// function reverseArrayInPlace(array) {
//     let  i = 0
//     let j = array.length-1
//     while(i < j/2) {
//         // console.log(`Swapping elements at indices ${i} and ${j}`);
//         let temp = array[i]
//         array[i] = array[j] 
//         array[j] = temp
//         // console.log(`Array after swapping: ${array}`);
//         i++
//         j--
//     }
//     return array
// }

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]


// Your code here.

// function reverseArray(array) {
//     let result = []
//     for(let i = array.length-1; i >=0 ; i--) {
//         result.push(array[i])
//     }
//     return result
// }

// function reverseArrayInPlace(array) {
//     let  i = 0
//     let j = array.length-1
//     while(i < j/2) {
//         // console.log(`Swapping elements at indices ${i} and ${j}`);
//         let temp = array[i]
//         array[i] = array[j] 
//         array[j] = temp
//         // console.log(`Array after swapping: ${array}`);
//         i++
//         j--
//     }
//     return array
// }

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

// let list = {
//     value:1, 
//     rest: {
//         value:2,
//         rest:{
//             value:3, 
//             rest:null
//         }
//     }
// }
// console.log(list)

// function arrayToList(array) {
//     list = null
//     for(i = array.length - 1; i >=0;i--) {
//         list = {value:array[i], rest:list}
//     }
//     return list
// }

// function listToArray(list) {
//     let output = []
//     while(list.rest != null) {
//         output.push(list.value)
//         list = list.rest
//     }
//     if (list.rest == null){
//         output.push(list.value)
//     }
//     return output
// }

// console.log(arrayToList([1,2,3]))
// console.log(listToArray(arrayToList([1,2,3])))

// Your code here.
// function arrayToList(array) {
//     list = null
//     for(i = array.length - 1; i >=0;i--) {
//         list = {value:array[i], rest:list}
//     }
//     return list
// }

// function listToArray(list) {
//     let output = []
//     while(list.rest != null) {
//         output.push(list.value)
//         list = list.rest
//     }
//     if (list.rest == null){
//         output.push(list.value)
//     }
//     return output
// }

// function prepend(item, list) {
//     return {value:item,rest:list}
// }

// function nth(list,number) {
//     return listToArray(list)[number]
// }

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

// Your code here.

function deepEqual(a, b) {
    if (a === b) return true
    
    if (a == null || typeof a != "object" || b == null || typeof b != "object") return false

    let keysA = Object.keys(a)
    let keysB = Object.keys(b)

    if (keysA.length!=keysB.length) return false
    for(let key of keysA) {
        if(!keysB.includes(key)|| !deepEqual(a[key],b[key])) return false
    }
    return true
}
  

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true