const fs = require('node:fs');

console.log("Leyendo el primer archivo...")
fs.readFile("./archivo.txt", "utf8", (err, text) => {
    console.log(text)
});

console.log("Haciendo cosas mientras leo el archivo")

console.log("Leyendo el segundo archivo...")

fs.readFile("./archivo2.txt", "utf8", (err, text) => {
    console.log(text)
});