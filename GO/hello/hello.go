/* Los programas se organizan en
paquetes de uno o mas archivos
.todos los archivos primero
declaran de que paquete forman parte
main = punto de entrada del programa, identifica el ejecutable
*/
package main

// se comenta igual que en javascript

// importa el paquete 'fmt', que permite hacer input y output
import "fmt"

/*
declaración de variables
scope:
si se declaran por fuera de funciones pueden ser utilizadas
en cualquier archivo del mismo paquete

aclaración: se usa camelCase
*/
var age = 20

/*
para declarar variables sin valor se debe establecer el tipo
var age int
var name string
var done bool
*/
/*
no se pueden declarar variables que no se usen.
variables sin valor inicial tienen un valor asignado por defecto
ex. int = 0 string = ''

*/

/*
Además, se pueden declarar de manera corta con ":="
*/
var name = "roger"

/* Diferencia strings:
solo se pueden definir con double quotes
*/

/*
Los arrays solo pueden contener items de un mismo tipo
y tienen un tamaño fijo declarado al inicializarlo
se le pueden agregar valor asi:
var myArray = [3]string{"First", "Second", "Third"}
*/
var myArray = [3]string{"first", "Second"}

/*
Los slices son estrudcturas de datos similares a
 los arrays de los lenguajes de alto nivel
se definen similares a una array omitiendo su largo
*/
var mySlice = []string{"Thrid", "fortu"}

/*
similares a los diccionarios de python.
No hace falta declarar su largo

*/
var agesMap = map[string]int{"flavio": 39}

/* funciones bastante parecidas a las de JS
La función main es especial por que
es donde el programa comienza su ejecución */

func main() {
	/*
			Go solo tiene un tipo de loop
			se puede simular un while loop asi
			i := 0
			for i < 10 {
		    fmt.Println(i)
		  i++
		}
	*/

	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	/*
		Se puede iterar una array con esto:
	*/

	numbers := []int{1, 2, 3}

	for i, num := range numbers {
		fmt.Printf("%d: %d\n", i, num)
	}

	/*
		Si no necesitamos utilizar el index
		reemplazamos "i" por "_" que cuenta como caracter especial
		ignorado por el compilador asi no cuenta como error
	*/

	/*
		similar a python y JS sin parentesis
	*/
	if agesMap["flavio"] < 12 {
		fmt.Println("flavio es niño")
	} else if agesMap["flavio"] < 18 {
		fmt.Println("flavio es menor")
	} else {
		fmt.Println("flavio es mayor")
	}

	/*
		Switch similar al de JS sin necesidad de break
	*/
	switch agesMap["flavio"] {
	case 39:
		fmt.Println("esta viejo")
	case 18:
		fmt.Println("es joven")
	default:
		fmt.Println("default")
	}

	// igual al print de python
	fmt.Println(age)
	fmt.Println(name)
	fmt.Println(myArray)
	fmt.Println(mySlice)
	fmt.Println(agesMap)
}
