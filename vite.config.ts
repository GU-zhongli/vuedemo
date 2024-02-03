import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

interface VITE_ENV_CONFIG {
  VITE_START_URL: string,  //链接用的拼接url
  VITE_API: string, //默认运营系统api接口前缀
  VITE_COOKICE_DOMAIN: string, //cookie作用域
  NODE_ENV: string,
}

const envScript = process.env.npm_lifecycle_script.split(' ')
const envName = envScript[envScript.length -1]
const envData = loadEnv(envName, 'env') as unknown as VITE_ENV_CONFIG;

const pathSrc = path.resolve(__dirname, '')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': `${pathSrc}/src`,
      'vue': 'vue/dist/vue.esm-bundler.js',
    },    
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }, 
  // 全局变量配置
  define: {
    config: envData
  },
  build:{
    terserOptions:{
      compress:{
        drop_console: true,
        drop_debugger: true,
      }
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080, 
    open: false,
  }
})
