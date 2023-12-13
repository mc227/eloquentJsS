class Rabbit{
    constructor(type){
        this.type = type
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

let object = new class{
    getWord(){
        return "hello"
    }
}

let killerRabbit = new Rabbit("killer")
Rabbit.prototype.teeth = "small"
console.log(killerRabbit.teeth)

// console.log(object.getWord())