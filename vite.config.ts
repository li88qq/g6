import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(()=>{
    return {
        plugins:[vue()],
        server:{
            host:true,
            port:5173
        },
        css:{
            preprocessorOptions: {
                less:{
                    javascriptEnabled: true,
                }
            }
        },
        resolve:{
            alias:{
                '@':resolve(__dirname,'./src')
            }
        }
    }
})