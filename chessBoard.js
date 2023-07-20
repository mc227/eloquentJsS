let size = 8
let output =""
for(let i = 0; i < size; i++){
    if (i % 2 == 0){
        output+="# # # #\n"
    } else {
        output+=" # # # #\n"
    }
}
console.log(output.trim())