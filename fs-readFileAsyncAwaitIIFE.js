const { readFile } = require('node:fs/promises');

// IIFE INMEDIATLY INVOQUED FUNCTION EXPRESSION
(
    async () => {
    console.log('Leyendo el primer archivo')

    const text = await readFile('./archivo.txt', 'utf-8')
    console.log('--1-- Texto: ', text)

    console.log('----Hacer cosas mientras lee el archivo----')

    console.log('Leyendo el segundo archivo')

    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('--2-- Texto: ', secondText)
})()    