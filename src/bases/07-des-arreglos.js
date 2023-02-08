

//console.log(' ¡¡¡¡Hola!!!! ¿Como estas? ')


const  caracteres = ['A','B','C','D']
/*
const A = caracteres[0]
const B = caracteres[1]
const C = caracteres[2]
*/
const [A, B , C, D='No tiene valor'] = caracteres
//console.log(D)

const returnArray = ([letters, numbers]) =>{
    return[letters, numbers]
}
const [letters, numbers] = returnArray(['XYZ', 987])
console.log(letters, numbers)