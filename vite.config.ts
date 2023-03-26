import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

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
        }
    }
})