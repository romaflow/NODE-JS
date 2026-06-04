// ESTE SOLO EN LOS MODULOS NATIVOS QUE NO TIENEN PROMESAS
const fs = require('node:fs')

const { promisify } = require('node:util')
const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo')

readFilePromise('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('--1-- Texto: ', text)
    })
    .catch(err => console.error('Error en archivo 1:', err));

console.log('----Hacer cosas mientras lee el archivo----')

console.log('Leyendo el segundo archivo')
readFilePromise('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('--2-- Texto: ', text)
    })
    .catch(err => console.error('Error en archivo 2:', err));   