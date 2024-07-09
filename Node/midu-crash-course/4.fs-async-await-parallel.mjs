// Ventajas
/* 
- Es mas rapido ya que mas cosas se hacen al mismo tiempo
- Permite controlar el orden de los sucesos
*/
// desventajas

import { readFile } from "node:fs/promises";

Promise.all([
	readFile("./archivo.txt", "utf-8"),
	readFile("./archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
	console.log("Primer texto: ", text);
	console.log("Segundo texto: ", secondText);
});

