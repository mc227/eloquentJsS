let map = new Map();
map.set("Julia",62)
map.set("Boris",62)
map.set("Liang",62)

console.log(`Julia is ${map.get("Julia")}`)
console.log("Does map have Jack? ", map.has("Jack"))
console.log("Does map have toString? ", map.has("toString"))