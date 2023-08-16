// dato complejo -> una coleccion o lista de datos
// 1 - Array -> listas
// 2 - objetos -> colecciones

let colores = ["rojo", "azul", "amarillo", "rosa"]
// console.log(colores[2])

// sintáxis de un objeto
// {} -> propiedades -> clave/valor

const tapita = {
  color: "verde",
  diametro: 8,
  material: "plastico",
  marca: "citric",
  esReciclable: true,
  coloresDisponibles: ["rojo", "amarillo", "verde"]
}

// Leer objeto
// console.log(tapita)

// Leer una propiedad de objeto
// console.log(tapita.diametro)

// Lectura anidada
// console.log(tapita.coloresDisponibles[1])

const persona = {
  nombre: "gabriel",
  apellido: "alberini",
  edad: 29,
  hobbies: ["jugar a la pc", "hacer trapecio", "andar en bicicleta"]
}
// console.log(persona)

// Crear propiedad a un objeto
persona.heladoFav = "banana con dulce de leche"
// console.log(persona)

// Borrar propiedades
delete persona.hobbies
// console.log(persona)

// Modificar propiedades
persona.edad = 30 // -> reasignar un nuevo valor
// console.log(persona)

// Obtener en un array todas las claves
let claves = Object.keys(persona)

for(let i = 0; i < claves.length; i++){
  let clave  = claves[i]
  // console.log(persona[clave])
}


// Métodos son funciones partes de un objeto, usan la información del objeto

const alumna = {
  nombre: "María",
  edad: 27,
  institucion: "ADA ITW",
  saludar: function(nombre){
    console.log(`¡Hola soy María y estoy saludando a ${nombre}!`)
  }
}

// Invocación de método
// alumna.saludar("Gabriel")

// This en objetos
alumna.comer = function(comida) {
  console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años y estoy comiendo ${comida}`)
}

// alumna.comer("fideitos")

// Modificando propiedades mediante métodos 
alumna.cumplirAnios = function() {
  this.edad = this.edad + 1
}

// console.log(alumna)
alumna.cumplirAnios()
// console.log(alumna)

// 1 - Sobre mi
// Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
// El objeto tiene que tener 3 propiedades: nombre, apellido, edad
// Mostrar en consola el objeto sobreMi

const sobreMi = {
  nombre: "gabriel",
  apellido: "alberini",
  edad: 29
}

// console.log(sobreMi)

// 2 - Presentar
// Crear una variable llamada user, a la que le vamos a asignar un objeto.
// El objeto tiene que tener 3 propiedades: fullname, email, age
// Mostrar en consola el objeto user
// Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

const user = {
  fullname: "Gabriel alberini",
  email: "gabi@gmail.com",
  age: 29
}

// console.log(`Hola, mi nombre es: ${user.fullname} y tengo ${user.age} años.`)

// 3 - Cancion
// Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
// Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
// El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)

const song = {
  title: "Rock and Roll",
  bandName: "Led Zeppelin",
  duration: 166000,
  album: "Led Zeppelin IV",
};

const cancion = {
  titulo: song.title,
  banda: song.bandName,
  duracion: song.duration / 1000,
  album: song.album
}

// console.log(song, "<-- objeto en ingles")
// console.log(cancion, "<-- objeto en español")

// 4 - Base de datos
// Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados

// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321

const persona1 = {
  id: 1,
  gmail: "ada@gmail.com",
  nombre: "Ada Lovelace",
  telefono: 1234567890
}

const persona2 = {
  id: 2,
  gmail: "grace@hotmail.com",
  nombre: "Grace Hopper",
  telefono: 987654321
}

//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
// console.log(persona1.nombre);

// 2. El ID de Grace
// console.log(persona2.id);

// 4 - correción de datos
// Tenemos la variable datos que tiene un objeto con los datos de una persona
// El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465
// También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.

const datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: "29",
  programa: true,
};

datos.telefono = 192837465
datos.edad = Number(datos.edad)
// console.log(datos)

// 6 - lenguaje favorito 2
// Tenemos la variable datos con un objeto que guarda datos de una persona
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
// Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"

const datos1 = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
};

if (datos1.programa === true){
  datos1.lenguajesFavoritos = ["sql","HTML"]
  console.log(`Hola, mi nombre es ${datos1.nombre} y programo en ${datos1.lenguajesFavoritos}`
)} else {
  console.log (`Hola, Mi nombre es ${datos1.nombre} y tengo ${datos1.edad} años.`)
}



// 7 - disco
// Tenemos la variable disco con un objeto que guarda datos de un album musical
// Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda, para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
// Completá el código para lograr el resultado esperado

const disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};

// codea aca la solucion
let nombreDisco = disco.nombre
let anioDisco = disco.anioLanzamiento
let nombreBanda = disco.banda.nombre

console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);
// Debería mostrar
// El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011