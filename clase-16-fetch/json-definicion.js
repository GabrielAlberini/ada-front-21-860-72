// JSON -> javascript object notation -> string

const carritoDeCompras = [
  {
    id: 1,
    name: "zapatilla",
    precio: 30000,
    color: "negro"
  },
  {
    id: 2,
    name: "mesa",
    precio: 10000,
    color: "blanca"
  },{
    id: 3,
    name: "lampara",
    precio: 2000,
    color: "verde"
  }
]

// Convertir a json
const json = JSON.stringify(carritoDeCompras)

// Convertir a objeto
const object = JSON.parse(json)
