function speak(line) {
    console.log(`The ${this.type} rabbit says, '${line}'`)
}

let whiteRabbit = {type:"white", speak}
let hungryRabbit = {type:"hungry", speak}

// whiteRabbit.speak("oh hi Mark")
// hungryRabbit.speak("Oh Hi Jhonny")



// speak.call(whiteRabbit,"Oh Hi Mark")

function normalize(){
    console.log(this.coords.map(n => n/ this.length))
}

normalize.call({coords:[0,2,3],length:5})