const fs = require("node:fs");

// retorna el directorio que se encuentra en el primer argumento
fs.readdir(".", (err, files) => {
	if (err) {
		console.log("Error al leer el directorio: ", err);
		return;
	}

	files.forEach((file) => {
		console.log(file);
	});
});
