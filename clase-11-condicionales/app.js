// variables: una cajita donde se guardan datos

let nombre = "Gabriel" // string
// let edad = 29 // number

// console.log(nombre) // Gabriel
// console.log(typeof edad) // number

// Unir string o unir frases -> concatenación
let frase1 = "Hola, mi nombre es Gabriel"
let frase2 = " y me gusta el helado."

// el signo + en string une
let resultado = frase1 + frase2

// console.log(resultado)

let num1 = 1
let num2 = 2

// el signo + en numeros los suma
let suma = num1 + num2

// console.log(suma)

// + - / * -> operadores aritmeticos -> operaciones matemáticas

// -------------------------------------------

// Condicionales -> una evaluación entre dos valores

// Sintaxis para usar una condición
// let -> palabra reservada para crear una variable
// if -> yes / if -> palabra reservada para crear una condición

// if -> palabra reservada
// () -> condición que siempre tiene dar true
// {} -> código a ejecutar en caso de que la condición sea true

// let clima = prompt("Ingrese como esta el clima")

// // 
// if(clima === "soleado"){  
//   console.log("Podes salir tranquilo 🌞")  
// } else {
//   //Template string -> back stick
//   console.log(`Llevate campera porque está ${clima} ☃️`)
// }

// Realizar un programa que pasandole un número del 1 al 7 nos diga de que día de la semana se trata

// 1 -> lunes
// 2 -> martes

// 1° input (pedir datos) -> 2° proceso (que hago con esos datos?) -> 3° output (como devuelvo esos datos?) 

// let numeroDia = prompt("Ingrese un número de día de la semana: ")

// if(numeroDia == 1) {
//   console.log("Lunes")
// } else if (numeroDia == 2) {
//   console.log("Martes")
// } else if (numeroDia == 3) {
//   console.log("Miércoles")
// } else if (numeroDia == 4) {
//   console.log("Jueves")
// } else if (numeroDia == 5) {
//   console.log("Viernes")
// } else if (numeroDia == 6) {
//   console.log("Sábado")
// } else if (numeroDia == 7) {
//   console.log("Domingo")
// } else {
//   console.log("El día no existe, ingrese un día correcto")
// }

// Crea un programa que pida una edad a un niño y realice las siguientes acciones

// - Si el niño tiene 6 años que aparezca en la consola: Te ganaste un skate porque tenes 6 años.
// - Si el niño tiene 8 años que aparezca en la consola: Te ganaste una play porque tenes 8 años.
// - Si el niño tiene 10 años que aparezca en la consola: Te ganaste una lampara porque tenes 10 años.
// - Si el niño tiene alguna edad no contemplada, que indique por la consola: No ganaste nada, lo siento :(

// La edad tiene que mostrarse en la consola mediante el uso de la variable "edad"

// let edad = prompt( "Cual es tu edad: ")

// if(edad == 6) {
//     console.log (`Te ganaste un skate por que tenes ${edad} años`)
// } else if (edad == 8) {
//     console.log (`Te ganaste un play por que tenes ${edad} años`)
// } else if (edad == 10) { 
//   console.log (`Te ganaste un lampara por que tenes ${edad} años`)
// } else {
//   console.log("No ganaste nada lo siento")
// }

// Operador de comparación

// == -> Es igual?
// > es mayor?
// < es menor?                     DAN COMO RESULTADO UN VALOR BOOLEANO (true o false)
// >= es mayor o igual?
// <= es menor o igual?
// !== es distinto?

// let dato1 = 100
// let dato2 = 54

// if(dato1 > dato2) {
//   console.log(`Dato 1: ${dato1} es mayor que dato 2: ${dato2}`)
// } else {
//   console.log(`Dato 2: ${dato2} es mayor que dato 1: ${dato1}`)
// }

// Realizar un programa que evalue si una persona puede o no entrar a un boliche.

// let edad = prompt("Cuantos años tenes? ")

// // 18 es mayor o igual a 18? true
// if(edad >= 18) {
//   console.log("Puedes ingresar")
// } else {
//   console.log("No puedes ingresar porque sos menor de edad")
// }

// Crear un programa que indique al usuario si puede manejar o no.
// -Si tiene mas de 18 años y no tiene deudas: Puede manejar.
// -Caso contrario, si es menor a 18 o tiene deudas: No puedes manejar.

// input -> proceso -> output
let edad = prompt ( "Cual es tu edad: ")
let tieneDeudas = false
  
if (edad >= 18){ 
  if(tieneDeudas === true) {
    console.log("No puedes manejar porque sos mayor de edad pero tiene deudas")
  } else {
    console.log("Puedes manejar porque sos mayor de edad y no tienes deudas")
  }
} else {
  console.log("Sos menor de edad, no podes manejar")
}