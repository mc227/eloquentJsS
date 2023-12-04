let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`)
    }
}

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer"
// killerRabbit.speak("SKREEE")

function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}