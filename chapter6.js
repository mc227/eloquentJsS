class Rabbit{
    constructor(type){
        this.type = type
    }
    
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

whiteRabbit = new Rabbit("White")
console.log(whiteRabbit.toString())

Rabbit.prototype.toString = function() {
    return `a ${this.type} Rabbit`
}

console.log(whiteRabbit.toString())