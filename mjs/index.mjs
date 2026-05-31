// .js -> por defecto utiliza commonjs
// .mjs -> para utilizar ES modules
// .cjs -> para utilizar commonjs

import { suma, resta, multiplicacion } from './suma.mjs'
console.log(suma(1, 2))
console.log(resta(1, 2))
console.log(multiplicacion(1, 2))