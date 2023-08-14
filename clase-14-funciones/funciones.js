let carritoDeCompra1 = ""

let prod1 = "foco"
let prod2 = "colchón"

carritoDeCompra1 = `${prod1}, ${prod2}`

// console.log(carritoDeCompra1)

// función -> fragmento de código que tiene una única acción
// nombres -> simpre serán acciones
// parámetros -> datos que usa internamente la funcion

const carrito = []

// declaración -> mira pc te enseño esto
const agregarProducto = (producto) => {
  carrito.push(producto)
}

// invocación -> usar la función
agregarProducto("licor")

// reutilizar el código
agregarProducto("celular")
agregarProducto("pc")
agregarProducto("vaso")
agregarProducto("cargador")
agregarProducto("lampara")

// console.log(carrito)

// Crea un programa que salude a una alumna de la siguiente forma:
// ¡Hola, {nombre}, tanto tiempo!

// declaración -> NUNCA LLEVA DATOS REALES
const saludar = (nombre, apellido) => {
  console.log(`¡Hola, ${nombre} ${apellido}, tanto tiempo!`)
}

// invocación -> paso los datos reales
// saludar("Eugenia", "Bucci")
// saludar("Melina", "Acosta")

// Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

const convertirHorasEnSegundos = (horas) => {
  let segundos = horas * 3600
  console.log(`En ${horas} horas hay ${segundos} segundos.`)
}

// convertirHorasEnSegundos(3)
// convertirHorasEnSegundos(1)
// convertirHorasEnSegundos(10)

// Dado un array de alumnas, crea un programa que comunique cuantas alumnas concurrieron a la clase

const alumnasPresentes = ["eugenia", "itatí", "kathi", "melina"]

const validarAlumnasPresentes = (arrayDeAlumnas) => {
  let cantDeAlumnasPresentes = arrayDeAlumnas.length
  console.log(`En la clase de hoy participaron ${cantDeAlumnasPresentes} alumnas.`)
}

// validarAlumnasPresentes(alumnasPresentes)

const arrayDelMiercoles = ["sofía", "marianela"]

// validarAlumnasPresentes(arrayDelMiercoles)

// Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b

const obtenerCompetencia = (dato1, dato2) => {
  let vs = `${dato1} vs ${dato2}`
  console.log(vs)
}

// obtenerCompetencia("Javascript", "Python")
// obtenerCompetencia("perros", "gatos")
// obtenerCompetencia("Celular", "Tablet")
// obtenerCompetencia("Instagram", "TikTok")

// Crear una función generarEmail que tome como argumentos dos string usuario y dominio y concatene el string con el dominio, por ej: usuario@dominio.com

const generarEmail = (usuario, dominio) => {
  let correo = `${usuario}@${dominio}.com`
  console.log(correo)
}

generarEmail("gabrielalberini", "gmail")
generarEmail("info", "gabodev")
generarEmail("contacto", "miempresa")

// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

const gritar = (nombre) => {
  console.log(`¡Hola, ${nombre}!`)
}

gritar("Gabriel")
gritar("Itatí")


// Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y muestre en consola el área del mismo

const calcularAreaTriangulo = (base, altura) => {
  let area = (base * altura) / 2
  console.log(`El area del triangulo es: ${area} m2`)
}

calcularAreaTriangulo(2, 3)

// Crear una función obtenerDatosDeCiudad que tome como argumentos un string "nombre", un número "poblacion" y un string "pais" y muestre en consola una frase con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

const obtenerDatosDeCiudad = (nombre, poblacion, pais) => {
  let consulta = `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}.`
  console.log(consulta) 
}

obtenerDatosDeCiudad("San Justo", 40000, "Argentina")
obtenerDatosDeCiudad("Cusco", 428450, "Perú")