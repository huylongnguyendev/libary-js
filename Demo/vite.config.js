import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    root: '.',
    resolve: {
        alias: {
            expert: path.resolve(__dirname, '../Expert/package/core')
        }
    }
})
