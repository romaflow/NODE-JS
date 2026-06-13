const path = require('node:path')

// Barra separador segun SO
console.log('Separador de rutas: ', path.sep)

// unir rutas con path join
const filePath = path.join('content', 'subfolder', 'archivo.txt')
console.log('Ruta del archivo: ', filePath)

// Obtener el nombre de archivo
const base = path.basename(filePath)
console.log('Nombre del archivo: ', base)

// Obtener el nombre de archivo
const fileName = path.basename(filePath, '.txt')
console.log('Nombre del archivo sin extension: ', fileName)

// mostrar la extension del archivo
const ext = path.extname(base)
console.log('Extension del archivo: ', ext)