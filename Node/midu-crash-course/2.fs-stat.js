// Uno de los modulos mas útiles y utilizados de Node
// Permite interactuar con el sistema de archivos del usuario

// A partir de Node 16 se recomienda usar el prefijo "node:"
const fs = require("node:fs");

// Obtiene la información de un archivo
const stats = fs.statSync("./archivo.txt");

console.log(  
    stats.isFile(), // Si es un fichero 
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbolico
    stats.size, // tamaño en bytes
)
