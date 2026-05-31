// importar uno en uno las funciones de os
// import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

// importar todas las funciones de os
const os = require ('node:os')

console.log ('Información del sistema')
console.log ('--------------------------')
console.log ('nombre del SO:', os.platform())
console.log ('version del SO:', os.release())
console.log ('Arquitectura:', os.arch())
console.log('CPU', os.cpus())
console.log ('Memoria libre:', os.freemem()/1024/1024/1024, 'GB')
console.log ('Memoria Total:', os.totalmem()/1024/1024/1024, 'GB')
console.log( 'uptime:' , os.uptime()/60/60,' horas')


