// tipos de datos primitivos -> string, number, undefined, NaN, null, boolean -> representan a un dato en singular

// tipo de datos compuestos -> array, objetos -> reprentan a un conjunto de datos

// array es una lista

// let prod1User1 = "maquina para cortar el pelo"
// let prod2User2 = "maquina para hacer pochoclo"

// let carritoDeCompras = prod1User1 + prod2User2

// console.log(carritoDeCompras)

let carritoDeCompras = ["bicicleta", "pc", "raqueta", "botella de vidrio"]

// console.log(carritoDeCompras)

// length -> longitud -> cuantos elementos tiene una lista (array)

// EN JAVASCRIPT LAS POSICIONES SE EMPIEZAN A CONTAR DESDE 0

// En que posición esta la botella de vidrio?
// elementos -> hace referencia a los datos dentro del array
// posiciones -> hace referencia a las posiciones de cada elemento
let cuartoElemento = carritoDeCompras[3]
// console.log(cuartoElemento)

// para acceder a UN DATO EN SINGULAR de un array tengo que hacerlo mendiante la posición

let numeros = [1,2,3,4,5,6,7,8,9,0]

let septimoElementoDelArray = numeros[6]

// console.log(septimoElementoDelArray)

// SIEMPRE HAY UN ELEMENTO MÁS QUE LAS POSICIONES

let letras = ["a", "b", "c"]
// en letras hay -> 3
// letras llega hasta la posición -> 2

// los datos primitivos son inmutables
// const nombre = "gabriel"
// nombre = "javier"

// los datos complejos son mutables -> pueden modificarse
const frutas = ["naranja", "manzana"]
frutas.push("banana")
// console.log(frutas)

// un array es mutable lo que no quiere decir es que pueda reasignarle un nuevo tipo de dato
// frutas = "lalalala"  // array -> string 

//agregar elementos mediante la posición
frutas[3] = "ciruela"
// console.log(frutas)

// sistema para veterinaria
const perros = ["lolo", "roco", "arandela", "loli"]
const gatos = []
const marcaDeAlimentos = []
const productosConDescuentosSemanales = []

// array -> tipo de dato iterable -> que se pueden recorrer -> cada elemento esta guardado en una posición en especifico 

// bucle -> es una estructura de control que repite código hasta que algo lo hace detener

// if -> estructura de control que toma decisiones
// for -> estructura de control que repite código hasta que algo lo detiene

// 1 - palabra reservada -> for
// 2 - variable inicial -> determinar el valor incial del indice
// 3 - condición -> el bucle se ejecuta hasta que condición sea false
// 4 - incremento o declemento -> modifica el valor del índice

// for(let indice = 0; indice <= 10; indice = indice + 1){ 
//   console.log(indice)
// }

// Hacer un programa que pasandole un array de nombres me indique en que posición se encuntra x nombre.

let nombresDeAlumnas = ["janina","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí","kathi", "itatí", "milagros", "kathi", "itatí"]

// En que posición del array está milagros -> 1

for(let indice = 0; indice < nombresDeAlumnas.length; indice = indice + 1){
  if(nombresDeAlumnas[indice] === "milagros"){
    console.log(`Encontre a milagros y dentro del array se encuentra en la posición ${indice}`)
  }
}

// if(nombresDeAlumnas[0] === "milagros") {
//   console.log("Milagros está en la posición 0")
// } else if (nombresDeAlumnas[1] === "milagros") {
//   console.log("Milagros está en la posición 1")
// } else if (nombresDeAlumnas[2] === "milagros") {                       FORMA INCORRECTA DE RECORRER UN ARRAY
//   console.log("Milagros está en la posición 2")
// } else if (nombresDeAlumnas[3] === "milagros") {
//   console.log("Milagros está en la posición 3")
// }