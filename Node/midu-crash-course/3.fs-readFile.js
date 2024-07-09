const fs = require("node:fs");

// Retorna un buffer de memoria de un archivo
// Es necesario especificar la codificación para que retorne
// Algo comprensible

// Manera sincrona
/* console.log("leyendo el primer archivo....");
const firstText = fs.readFileSync("./archivo.txt", "utf-8");

console.log(firstText);

console.log("leyendo el segundo archivo....");
const secondText = fs.readFileSync("./archivo2.txt", "utf-8");

console.log(secondText);
 */

// Manera asincrona
console.log("leyendo el primer archivo....");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
	console.log("Primer Texto:", text);
});

console.log("Hacer cosas mientras lee el archivo....");

console.log("leyendo el segundo archivo....");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
	console.log("Segundo Texto:", text);
});

// * Diferencias entre ambas

/* Sincrono */
/*
El codigo se ejecuta de manera lineal y se puede representar con una torre,
estando las funciones mas nuevas en la punta y las mas viejas en el fondo.
en cuanto se termina de ejecutar una linea se elimina de la torre
Dando paso a la siguiente.
Si una función require de otra a lo largo de su ejecución,
dicha función también se añade a la torre
Justo por encima de la linea que la invoco. Una vez se termine de ejecutar
se prosigue con lo que reste de la función original.
*/

/* Asincrono */
/*  
El codigo se ejecuta tambien de manera secuencial con la diferencia de 
que varias lineas de codigo pueden ejecutarse a la vez.
Esto se puede dar con funciones que utilicen callbacks.
Las callbacks son funciones que solo se ejecutan una vez que cierto evento suceda.
No impiden que otras lineas de codigo sigan su curso natural,
de manera visual, es igual a que se te pare el coche a la mitad de la ruta
y decidas ponerte en la banquina hasta poder arrancarlo devuelta.
mientras que uno intenta arrancarlo, los demás autos siguen su camino,
y una vez que consigas arrancarlo volvés a la ruta.  

es util cuando se esta llevando a cabo alguna tarea que requiera de tiempo
y no se quiera retrasar la ejecución de otras tareas.
*/