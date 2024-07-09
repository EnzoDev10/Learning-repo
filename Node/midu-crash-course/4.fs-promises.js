const fs = require("node:fs/promises");

// Mismas acciones que en "3.readFile" pero con promesas.
// Utilizar promesas es una manera mas moderna que con callbacks.
// Tip: es mejor utilizar promesas y async antes que de manera normal.

console.log("leyendo el primer archivo....");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
	console.log("Primer Texto:", text);
});

console.log("Hacer cosas mientras lee el archivo....");

console.log("leyendo el segundo archivo....");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
	console.log("segundo Texto:", text);
});
