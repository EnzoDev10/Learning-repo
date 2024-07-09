const fs = require("node:fs/promises");
const path = require("node:path");

// Obtiene el path de un directorio a través del
// segundo argumento a la hora de ejecutar el programa
// En caso de que no se de ningún path, utiliza el
// directorio que lo contiene

const folder = process.argv[2] ?? ".";

// retorna el directorio que se encuentra en el primer argumento
async function ls(folder) {
	let files;
	try {
		files = await fs.readdir(folder);
	} catch {
		// En caso de error y para evitar que todo se vaya a la mierda,
		// retorna el path y termina el proceso
		console.error(`No se pudo leer el directorio ${folder}`);
		process.exit();
	}

	const filePromises = files.map(async (file) => {
		const filePath = path.join(folder, file);
		let stats;
		try {
			stats = await fs.stat(filePath); // status - información del archivo
		} catch {
			console.error(`No se pudo leer el archivo ${filePath}`);
			process.exit(1);
		}

		const isDirectory = stats.isDirectory();
		const fileType = isDirectory ? "d" : "f";
		const fileSize = stats.size;
		const fileModified = stats.mtime.toLocaleString();

		return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`;
	});

	const filesInfo = await Promise.all(filePromises);

	filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
