/*
finally gonna finish that javascript book
i think reading a few books 
make that several books will make my work with chatgpt better
*/
// function squared(x) {
//     return x*x;
// }

// // console.log(squared(2))

// console.log(future())

// function future(){
//     return "flying cars"
// }

const power = (base,exponent) => {
    let result = 1
    for(let i = 0; i < exponent; i++) {
        result = result*base
    }
    console.log(result)
}

power(2,3)