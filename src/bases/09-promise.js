/*
console.log('Inicio')

new Promise( (resolve, reject)=> {

    console.log('Cuerpo de la promesa')
    resolve('Promesa resuelta')
    //reject('Promesa no resuelta')
    
})
.then( msg => console.log(msg))
.catch( err => console.log(err))
.catch(console.log)
.then(console.log)
console.log('Fin')

*/

import {getHeroeById} from './bases/08-imp-exp'

const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            const hero = getHeroeById( id )
            if(hero){
                resolve( hero )    
            }else{
                reject('El heroe buscado no existe')
            }    
            
            

        },1000);
    });
}

getHeroeByIdAsync(30)
.then(h => {console.log(`El heroe es: ${h.name}`)
})
.catch(console.log)