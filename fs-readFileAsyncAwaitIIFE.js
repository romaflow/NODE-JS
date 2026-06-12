const { readFile } = require('node:fs/promises');

async function init() {

    console.log('Leyendo el primer archivo')

    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('--1-- Texto: ', text)

    console.log('----Hacer cosas mientras lee el archivo----')

    console.log('Leyendo el segundo archivo')

    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('--2-- Texto: ', secondText)
}

init()

// Otra forma de hacerlo es con una IIFE, es decir, una función que se ejecuta 
// inmediatamente despues de ser definida. Esto es útil para evitar 
// tener que definir una función y luego llamarla, 
// y también para mantener el código más limpio y organizado. 

// IIFE INMEDIATLY INVOQUED FUNCTION EXPRESSION
/*(
    async () => {
    console.log('Leyendo el primer archivo')

    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('--1-- Texto: ', text)

    console.log('----Hacer cosas mientras lee el archivo----')

    console.log('Leyendo el segundo archivo')

    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('--2-- Texto: ', secondText)
})()    */