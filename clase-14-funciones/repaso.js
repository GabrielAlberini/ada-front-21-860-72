// array -> dato complejo/compuesto
// 1 - un array es una lista
// 2 - cada dato dentro de un array es un elemento
// 3 - cada elemento está en una posición dada
// 4 - en un array se puede guardar cualq dato
// 5 - es un tipo de dato mutable -> se modifica
// 6 - los datos primitivos -> no se modifican

const datos = ["gabriel", 29, true, undefined]
const nombres = ["itatí", "eugenia", "gabriel"]

nombres.push("melina")
// console.log(nombres)

nombres.push("juan")

// EN UN ARRAY SIEMPRE HABRÁ UNA POSICIÓN MENOS QUE ELEMENTOS

// bucles -> ciclos -> código que se repite
// 1 - tiene una variable de uso interno que puede modificase
// 2 - el bucle se ejecutará hasta que la condición sea false
// 3 - la variable incial se puede modificar

for(let i = 0; i <= 10; i++){
  console.log(i)
}

for(let i = 0; i < nombres.length; i++) {
  console.log(`En la posición ${i} está: ${nombres[i]}`)
}