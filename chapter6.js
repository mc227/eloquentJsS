// function Rabbit(type){
//     this.type = type;
// }

// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
// }

// let weirdRabbit = new Rabbit("weird")

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype)
// console.log(Object.getPrototypeOf(weirdRabbit) === Rabbit.prototype)

class Rabbit {
    constructor(type){
        this.type = type
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

let whiteRabbit = new Rabbit("white")
let weirdRabbit = new Rabbit("weird")