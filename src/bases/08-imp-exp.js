 

//console.log(' ¡¡¡¡Hola!!!! ¿Como estas? ')
/*
import { owners } from './data/heroes'

const [dc, marvel] = owners
console.log(dc)
console.log(marvel)



import superHeroes from './data/heroes'
console.log(superHeroes)

*/
//getHeroeId (Id)
//Funcion de flecha
//find 

import superHeroes from "../data/heroes"

export const getHeroeById = (id) =>
     superHeroes.find(hero => hero.id === id)




//getHeroesByOwner 'Dc' , 'Marvel'
//[]
export const getHeroesByOwner = (owner) =>
     superHeroes.filter(hero => hero.owner === owner)

export default '08-imp-export';

//Conexion de archivoooss
/*
import { getHeroeId, getHeroesByOwner } from "./bases/08-imp-exp"

console.log(getHeroeId(2))

console.log(getHeroesByOwner('Marvel'))*/