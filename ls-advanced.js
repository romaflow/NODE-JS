const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch (err) {
        console.error(pc.red(`Error leyendo el directorio: ${folder}`))
        return process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stat

        try {
            stat = await fs.stat(filePath)
        } catch {
            console.error(`No se puede leer el archivo ${filePath}`)
            process.exit(1)
        }

        const isDirectory = stat.isDirectory()
        const fileType = isDirectory ? '(d)' : '(f)'
        const fileSize = stat.size.toLocaleString()
        const fileModified = stat.mtime.toLocaleString()
        return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
    })

    const filesInfo = await Promise.all(filesPromises)
    filesInfo.forEach(info => console.log(info))
}

ls(folder)

