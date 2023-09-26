const fs = require('node:fs/promises');

console.log("Leyendo el primer archivo...")
fs.readFile("./archivo.txt", "utf8")
    .then(text => {
        console.log("primer texto", text)
    })

console.log("Haciendo cosas mientras leo el archivo")

console.log("Leyendo el segundo archivo...")

fs.readFile("./archivo2.txt", "utf8")
    .then(text => {
        console.log("segundo texto", text)
    })