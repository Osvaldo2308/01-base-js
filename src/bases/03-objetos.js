

//console.log(' ¡¡¡¡Hola!!!! ¿Como estas? ')

const persona= {
    nombre: 'Osvaldo',
    apellido: 'Maye',
    edad: 20,
        direccion:{
            ciudad:'New York',
            zip: 31800,
            lat: 23.453,
            lon: 443.765,
        }
}
const persona2 = {...persona};
persona2.nombre= 'Peter'

console.log(persona)
console.log(persona2)

