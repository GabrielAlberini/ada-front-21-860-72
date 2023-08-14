//array -> listas -> elementos -> posiciones

// const arboles = ["ceibo", "jacarandá", "fresno", "pezuña de vaca", "palo borracho"]

//ver en consola la cantidad de elementos
// console.log(arboles.length)

//ver array en consola
// console.log(arboles)

//ingresar a x elemento mediante la posición
// console.log(arboles[0])
// console.log(arboles[1])
// console.log(arboles[2])

//----------------------------------------------

//bucle -> fragmento de código que se repite hasta que la condición de false

// 1 - palabra reservada
// 2 - variable inicial -> variable de uso interno, se puede modificar en cada vuelta
// 3 - condición -> validar que en algún momento sea false

// for(let indice= 0; indice < arboles.length; indice = indice+ 1){
// En la posición x se encuentra el arbol x
  // console.log(`En la posición ${indice} se encuentra el arbol ${arboles[indice]}.`)
// }

// los string comparten la caracteristica de los arrays al ingresar a los elementos mediante la posición
// let nombre = "gabriel"
// console.log(nombre[0])
// console.log(nombre.charAt(2))

// Crear un programa que muestre por la consola si una palabra termina en alguna de las vocales

// input -> proceso -> output

// const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "A", "E", "I", "O", "U", "Á", "É", "Í", "Ó", "Ú"]
// const nombre = "Damiana"
// const ultimaLetra = nombre[nombre.length - 1]

// for(let i = 0; i < vocales.length; i = i + 1){
//   if(ultimaLetra === vocales[i]){
//     console.log("Si, el nombre termina en vocal: " + vocales[i])
//   }
// }

// Dado un array de palabras, imprimir en consola, la cantidad de palabras que hay en el
// array.

// Dado un array de 18 números, imprimir la suma de todos su elementos.
// Ej: const array = [1,2,3] // 6 <- output

// Dado un array de 9 numeros, imprimir en consola un true para todos los
// números pares.

// EJ1:
// const palabras = ["mesa", "silla", "mano", "alas", "moneda"]
// console.log("Cantidad de palabras: " + palabras.length)

// EJ2:
// const array = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18]
// let suma1 = 0;

// for (let i = 0; i < array.length; i++) {
//   suma1 += array[i];
// }

// console.log(suma1);

// const numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
// let suma=0

// for (let i =0; i > numeros.length; i=i+1){
//   suma=suma+numeros[i]
// }

// console.log("La suma es: " +suma)

//EJ3
// const numeros = [1,20,3,4,52,6,74,83,9]

// for (let i = 0; i < numeros.length; i = i + 1){
//   if (numeros[i] % 2 === 0){
//     console.log("El valor " + numeros[i] + " es par.")
//   }
// }

// 10 % 2 -> si tengo |11 alfajores y lo tengo que dividir entre 2, cuantos me sobran? -> 0
// 11 % 2 -> 1

//tablas
let num = 12
let esMultiplo = num % 3 === 0

if(esMultiplo) {
  console.log(true)
} else {
  console.log(false)
}
