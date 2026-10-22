import { copyFile, cp, mkdir, rm } from 'node:fs/promises'

await rm('dist', { recursive: true, force: true })
await mkdir('dist', { recursive: true })

await copyFile('index.html', 'dist/index.html')
await copyFile('style.css', 'dist/style.css')
await copyFile('script.js', 'dist/script.js')
await cp('images', 'dist/images', { recursive: true })

console.log('Static website copied to dist/')
