const path = require("node:path");
// Modulo nativo que permite conocer el path de los archivos

// Barra separadora de carpetas segun SO
// console.log(path.sep)

// unir rutas con path.join
// Crea un nuevo path basado en los argumentos que se le brinde.
// Nunca crees paths de manera manual ya que los separadores
// cambian dependiendo del SO
const filePath = path.join("content", "subfolder", "text.txt");
console.log(filePath);

// Retorna el nombre del fichero a traves de un path
const base = path.basename("/tmp/midu-secret-files/password.txt");
console.log(base);

// Si se le agrega un segundo argumento que contenga una extension
// se puede obtener solamente el nombre
const name = path.basename("/tmp/midu-secret-files/password.txt", ".txt");
console.log(name);

// Retorna la extension de un fichero
const extension = path.extname("my.super.image.jpg");
console.log(extension);
