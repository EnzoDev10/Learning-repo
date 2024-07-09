// el objeto process es un objeto global
// que proporciona información y
// control sobre el proceso actual de ejecución
// Tiene propiedades y metodos que permiten
// interactuar con el entorno de ejecución de Node.js
// y te deja conocer información sobre el proceso que
// se este llevando a cabo en este momento

// argumentos de entrada
// Retorna los argumentos introducidos en el cli
//console.log(process.argv);

// controlar el proceso y su salida
// Dependiendo del número el proceso se termina
// por una razón u otra
// 0 = todo a salido bien y tiene que terminar por eso
// 1 = Algo a salido mal y por eso debe terminar
//process.exit(0);

// podemos controlar eventos del proceso
// similar a un eventListener, el primer argumento es un suceso
// y el segundo una acción que tomar cuando pase
/* process.on("exit", () => {
	// limpiar los recursos
}); */

// Current working directory
// Nos dice la carpeta desde la que ejecutamos un proceso
console.log(process.cwd());
// Nos dice desde que carpeta se esta

// variables de entorno
console.log(process.env.PEPITO)