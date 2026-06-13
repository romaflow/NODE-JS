// Argumentos de entrada en la terminal

console.log(process.argv)
// consola 
// node process.js hola mundo como estas

// controlar el proceso y su salida

// process.exit(0) // 0 es quetodo esta bien, si es diferente a 0 es Error

// podemos controlar eventos del proceso

process.on('exit', () => {
    // limpiar recursos, cerrar conexiones, etc
    console.log('El proceso ha terminado')
})

// actual directorio de trabajo
console.log(process.cwd())

// plataforma
console.log(process.env.PEPITO)
// CONSOLA
// PEPITO=hola node process.js  
