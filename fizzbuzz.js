/**
 * [x] step 1 print out 1 to 100
 * [x] step 2 print fizz for numbers divisible by 3
 * step 3 print buzz for numbers divisible by 5
 * step 4 print fizzbuzz for numbers divisible by 3 and 5 while still
 * printing fizz for numbers divisible by 3 and buzz for numbers divisible by 5
 */

for(let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log("Fizz")
    } else if(i % 5 == 0  && i % 3 != 0){
        console.log("Buzz")
    } else if(i % 5 == 0  && i % 3 == 0){
        console.log("FizzBuzz")
    }
    else {
        console.log(i)
    }
}