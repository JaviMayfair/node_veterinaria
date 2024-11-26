const fs = require('fs')

function registrar(nombre, edad, animal, color, enfermedad) {
    const registros = [
        {
            nombre: nombre,
            edad: edad,
            animal: animal,
            color: color,
            enfermedad: enfermedad
        }
    ]
    const archivo = fs.readFileSync('citas.json', 'UTF8')
    JSON.parse(archivo).forEach((registro) => {
        registros.push(registro)
    })
    fs.writeFileSync('citas.json', JSON.stringify(registros))
    console.log('Registro creado exitosamente')
}

function leer() {
   const archivo = fs.readFileSync('citas.json', 'UTF8')
   console.log(archivo)
}

module.exports = {registrar, leer}