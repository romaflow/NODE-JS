const http = require('node:http') // protocolo HTTP del servidor
const { findAvailablePort } = require('./free-port.js')

const desirePort = process.env.PORT ?? 3000

// parte del servidor
const server = http.createServer((req, res) => {
    console.log('request recibido')
    res.end('Hola mundo')
})

// encontrar un puerto disponible
findAvailablePort(desirePort).then(port => {
    server.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`)
    })
})

//cmd> PORT=4000 node http.js


// puerto automatico
/*server.listen(0, () => {
    console.log(`Servidor escuchando den el puerto http://localhost:${server.address().port}`)
})*/