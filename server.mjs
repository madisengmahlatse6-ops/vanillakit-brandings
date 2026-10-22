import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'

const root = process.cwd()
const port = Number(process.env.PORT || 5173)
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' }

createServer(async (request, response) => {
  try {
    const requestPath = decodeURIComponent((request.url || '/').split('?')[0])
    const relativePath = requestPath === '/' ? 'index.html' : requestPath.replace(/^\/+/, '')
    const filePath = normalize(join(root, relativePath))
    if (!filePath.startsWith(root)) throw new Error('Invalid path')
    const fileStat = await stat(filePath)
    if (!fileStat.isFile()) throw new Error('Not found')
    const body = await readFile(filePath)
    response.writeHead(200, { 'Content-Type': types[extname(filePath).toLowerCase()] || 'application/octet-stream' })
    response.end(body)
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Not found')
  }
}).listen(port, '127.0.0.1', () => console.log(`Vanilla Kit website: http://127.0.0.1:${port}`))
