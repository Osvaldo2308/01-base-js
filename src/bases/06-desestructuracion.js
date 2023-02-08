

//console.log(' ¡¡¡¡Hola!!!! ¿Como estas? ')

const person ={
    name:'Tony',
    age : 45,
    codeName: 'IronMan'
}
const { name, age, codeName, power='No tiene poder' } = person
//console.log(name)
//console.log(age)
//console.log(codeName)
//console.log(power)


//desestructuracion de objetos
const createHero = ( person)=>{
    const {name, age, codeName, power} = person
    return {
        id:123,
        name,
        age,
        codeName,
        power
    }
}

//Sin return

const createHero1 = ( {name, age, codeName, power})=>({  
        id:123,
        name,
        age,
        codeName,
        power
    })

console.log(createHero(person))
console.log(createHero1(person))