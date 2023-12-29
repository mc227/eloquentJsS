/*
   i asked chat GPT for a good name for this javascript file. 
   This was my prompt:
   what should i name a javascript file that runs this
    console.log(sum(range(1, 10)));
    // → 55

    i still have to write my own sum and range functions in this same file

    
    ChatGPT:
    You might name the file something like "sumRangeScript.js" to reflect 
    that it contains a script involving the sum and range functions
*/

function range(first, last){
    let array = []
    for(let i = first; i <= last; i++) {
        array.push(i)
    }
    return array
}

function sum(array){
    let total = 0
    for(let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

console.log(sum(range(1, 10)));
// 55