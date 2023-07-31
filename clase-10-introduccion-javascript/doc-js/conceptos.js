// Algoritmo -> una forma de resolver un problema a través de pasos ordenados

// Caperucita roja:

// Problema: Llegar a la casa de la abuela
// Solución algoritmica 1: Ir por el bosque -> corto pero peligroso
// Solución algoritmica 2: Ir por la ruta -> largo pero seguro

// input -> procesamiento y almacenacimento -> output

// input -> botón y le body
// procesamiento y almacenacimento -> que hago con la información del input?
// output -> como "devuelvo" el proceso

// input y output -> datos
// procesamiento y almacenacimento -> lógica

console.log("Hola desde el Visual Studio Code")
console.log("Hola, por segunda vez")

// Variables -> "cajas" -> guardan info en la memoria REAL de mi pc
// Sintaxis -> normas para usar un lenguaje

let apellido = "alberini"; // -> input -> almacenamiento

console.log(apellido) // proceso -> output

let suma = 2+2

console.log(suma)

// tipos de datos
let palabra = "hola" // string -> envuelto entre comillas
let numero = -1 // number -> solo con números

// Una variable existe, pero no tiene asignado un dato aún
let chau = "chau"// string

let palabraDos = chau

console.log(palabraDos)

// Tipo de dato -> typeof
console.log(typeof numero)

// Las varibles tienen momentos en su creación y uso
// 1 - declaración -> escucha compu, te aviso que te reservo este lugar
let variableDeclarada;
console.log(variableDeclarada)

// 2 - inicialización -> escucha compu, guarda este dato adentro de...
variableDeclarada = "Inciando la variable"
console.log(variableDeclarada)

// 3 - Reasignación -> escucha compu AHORA, quiero guardar este dato NUEVO
variableDeclarada = "Nuevo dato en la variable"
console.log(variableDeclarada)

// EJEMPLO: Carrito de compra -> empieza vacio, el usuario compra 1 producto y por ultimo puedo comprar OTRO producto. Por ende, el carrito empieza vacio y termina con 2 productos

let carritoDeCompra;
console.log(carritoDeCompra)

carritoDeCompra = "2 - Agregaste una cama"
console.log(carritoDeCompra)

carritoDeCompra = "3 - Agregaste una cama y un tachito para la basura"
console.log(carritoDeCompra)

// Concatenación -> unir palabras
let palabra1 = "Hola "
let palabra2 = "como estas?"

// Concatenar mediante el signo +
console.log(palabra1 + palabra2)

let num1 = 1 
let num2 = 2

console.log(num1 + num2)

// Concatenar mediante template string (back stick = palitos al revez)
// comando en pc -> ctrl + alt + } ->  alt + 96

let nombre = "Gabriel"
let edad = 29 // number

console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)

let variableNumber = 29
let variableString = "29"

console.log(typeof variableNumber)
console.log(typeof variableString)

// let heladoFavorito = prompt("¿Cual es tu helado favorito?")

// console.log(`Tu helado favorito es: ${heladoFavorito}`)

// Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".

// input -> ingreso de datos
// almacenamiento -> persistencia de datos
// let nombreDelUsuario = prompt("Ingrese su nombre")
// let apellidoDelUsuario = prompt("Ingrese su apellido")

// procesamiento y output -> uso de datos y muestra al usuario
// console.log(`Hola ${nombreDelUsuario} ${apellidoDelUsuario}, bienvenida a ADA ITW :)`)

// Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

// let gustoDeHeladoUno = prompt("pepito")
// let gustoDeHeladoDos = prompt("Ingrese el segundo gusto de helado favorito:")
// let gustoDeHeladoTres = prompt("Ingrese el tercer gusto de helado favorito:")

// console.log(`Aquí tiene su helado de ${gustoDeHeladoUno}, ${gustoDeHeladoDos} y ${gustoDeHeladoTres}`)

// Crear un programa que pida ingresar una edad perruna y devuelva el equivalente de esa edad en años humanos.

// mi perro tiene 2 años perrunos, es decir 14 años humanos

let edadPerro = prompt("Ingrese la edad de su perro:")
let edadHumana = edadPerro * 7 // 3 -> 21 años humanos (3 * 7)

//                                   3                            21   
console.log(`Si tu perro tiene ${edadPerro} años, equivale a ${edadHumana} años humanos.`)

//REFERENCIA DE LA CLASE: https://twoda-intro-frontend-mt.onrender.com/docs/modulo-2/clase-10

//EJERCICIOS: https://github.com/Ada-IT/ejercicios-frontend/blob/master/modulo-2/ejercicios/13-variables-datos-operadores.md