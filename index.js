const {registrar, leer} = require ('./operaciones')
const argumentos = process.argv.slice(2)
const operacion = argumentos[0]

if(operacion === "registrar"){
    let nombre = argumentos[1]
    let edad = argumentos[2]
    let animal = argumentos[3]
    let color = argumentos[4]
    let enfermedad = argumentos[5]
    registrar(nombre, edad, animal, color, enfermedad)
    }
if(operacion === "leer"){
    leer()
    }