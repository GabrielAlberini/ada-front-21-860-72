const persona = {
  nombre: "gabriel",
  apellido: "alberini",
  comer: function(comida){
    console.log(`Gabriel está comiendo ${comida}.`)
  },
  saludar: function(nombre) {
    console.log(`Gabriel está saludando a ${nombre}.`)
  }
}

// console.log(persona.nombre)
// persona.comer("hamburguesa con fideos")
// persona.saludar("Milagros")

const lapiz = {
  color: "rojo",
  pintar: function() {
    console.log("Está pintando")
  }
}

// Lectura de propiedad
console.log(`El lapiz es de color ${lapiz.color}`)
// Invocación de método
lapiz.pintar()