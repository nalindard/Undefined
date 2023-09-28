import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import Autoimport from 'unplugin-auto-import/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({ dirs: ['@cmp/'] }),
        Autoimport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: [
                // presets
                'vue',
                'vue-router',
            ],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@str': fileURLToPath(new URL('./src/stores', import.meta.url)),
            '@cmp': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@vws': fileURLToPath(new URL('./src/views', import.meta.url)),
            '@icn': fileURLToPath(new URL('./src/components/icons', import.meta.url)),
            '@utl': fileURLToPath(new URL('./src/utils', import.meta.url)),
            '@cns': fileURLToPath(new URL('./src/constants', import.meta.url)),
        },
    },
    server: {
        host: "127.0.0.1",
    }
})
