const contenedor = document.getElementById("cont-personajes")
const ramdomDog = fetch("https://dog.ceo/api/breeds/image/random")
const allBreeds = fetch("https://dog.ceo/api/breeds/list/all")

// ramdomDog.then((respuesta)=> {
//   return respuesta.json()
// }).then((dog) => {
//  console.log(dog)
//  contenedor.innerHTML = `<img src="${dog.message}" >`
// })

allBreeds.then((res) => {
  return res.json()
}).then((data) => {
  console.log(data)
})