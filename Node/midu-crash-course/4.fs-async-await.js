// Mismas acciones que en "3.readFile" pero con async await.
// Con CommonJS no es posible utilizar await.

const fs = require("node:fs/promises");

// IIFE = Immediatly invoked Function Expression
// Son funciones que se crean y se llaman al mismo tiempo
// Se suelen ver en archivos mas antiguos de node
(async () => {
	console.log("leyendo el primer archivo....");
	const text = await fs.readFile("./archivo.txt", "utf-8");
	console.log("Primer Texto:", text);

	console.log("Hacer cosas mientras lee el archivo....");

	console.log("leyendo el segundo archivo....");
	const secondText = await fs.readFile("./archivo2.txt", "utf-8");
	console.log("segundo Texto:", secondText);
})();
