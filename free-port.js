const net = require('node:net')

function findAvailablePort(desiredPort) {
    return new Promise((resolve, refact) => {
        const server = net.createServer()
        server.listen(desiredPort, () => {
            const { port } = server.address()
            server.close(() => {
                resolve(port)
            })
        })

        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                findAvailablePort(0).then(port => resolve(port))
            } else {
                reject(err)
            }
        })
    })
}

module.exports = { findAvailablePort }