import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    root: '.',
    resolve: {
        alias: {
            Verde: path.resolve(__dirname, '../Verde/package/core')
        }
    }
})
