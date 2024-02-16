function esperarPor (tempo = 2000)  {
    return new Promise( resolve => {
        setTimeout(function(){
            resolve()
        }, tempo)
    })
}

function executarPromise(){
    
    esperarPor()
    .then(() => console.log('[Promise] Depois de 2s...'))
    .then(() => esperarPor(3000) )
    .then(() => console.log('[Promise] Depois de 3s...'))
    .then(() => esperarPor(1500) )
    .then(() => console.log('[Promise] Depois de 1.5s...'))

}

async function executarAsyn (){
    
    await esperarPor(2000)
    console.log('[Async Await] Depois de 2s...')

    await esperarPor(3000) 
    console.log('[Async Await] Depois de 3s...')
    
    await esperarPor(1500) 
    console.log('[Async Await] Depois de 1.5s...')

}

executarPromise()
executarAsyn()