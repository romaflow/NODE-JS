const fs = require('node:fs')

const text = fs.readFileSync('./archivo.txt','utf-8')
const secondText = fs.readFileSync('./archivo2.txt','utf-8')

console.log('Leyendo el primer archivo')
console.log(text)
console.log('----Hacer cosas mientras lee el archivo----')
console.log('Leyendo el segundo archivo')
console.log(secondText)