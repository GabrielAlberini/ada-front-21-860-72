// fetch
// Metodo propio de JS para  enviar un pedido y obtener información del servidor
// Conectarnos con otras aplicaciones, bases de datos o servidores

// let variable = fecth(url, [options])

const contenedor = document.getElementById("cont-personajes")
const personajes = fetch("https://rickandmortyapi.com/api/character")

personajes.then((respuesta) => {
  return respuesta.json()
}).then((respuestaConvertida) => {
  const personajes = respuestaConvertida.results
  console.log(personajes)
  
  for(let i = 0; i < personajes.length; i++){
    const id = personajes[i].id
    const nombre = personajes[i].name
    const especie = personajes[i].species
    const imagen = personajes[i].image

    contenedor.innerHTML += 
    `<div class="cont-personaje">
      <p><span>${id}</span> - <img class="img-personaje" src="${imagen}"> - ${nombre} (${especie})</p>
     </div>`
  }

}).catch(error => {
  console.log(error)
})