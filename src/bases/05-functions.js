

//console.log(' ¡¡¡¡Hola!!!! ¿Como estas? ')


//function saludar( xyz ){
//    return `Hola ${ xyz }`
//}

//const saludar = function( xyz ){
//    return `Hola ${ xyz }`
//}

//Funcion de flecha
const saludar = ( nombre = 'Peter' )=> `Hola ${ nombre }`



//saludar = true

//const nombre = 'Tony'
 
//console.log (saludar())

const getUser = () => ({
    
        uid:      'ABC123',
        username: 'Tony'
})

//console.log(getUser())

const heroes = [{
    id: 1,
    name:'Batman'
},{
    id:2,
    name:'Superman'
}]
//sin campos especificos
const h = heroes.find( ( h ) => h.id ===1 );

console.log(h.name)

// campos especificos
const { name }= heroes.find( ( h ) => h.id ===1 );

console.log(name)

