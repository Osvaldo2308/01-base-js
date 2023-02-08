const myPromise = ()=>{
    return new Promise(( resolve, reject)  =>{
        setTimeout(()=>{
            //resolve('Tenemos un valor en la promesa')
            reject('REEJECT EN MYPROMISE')
        }, 1000);
    })
}

const medirtiempoAsync =async()=>{

    try{
        console.log('Inicio')
        //myPromise().then(console.log)
        const respuesta = await myPromise()
        console.log(respuesta)
        
        
        
        console.log('Fin')
        return 'Fin de medir tiempo'
        
    }catch(error){
        
        //return 'CATCH en medir tiempo'
        throw 'Error en medir tiempo'
    }
    
}

medirtiempoAsync()
.then(valor => console.log('THEN exitoso', valor))
.catch(err => console.log('Error:', err))