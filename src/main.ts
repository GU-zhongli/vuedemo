import './assets/main.scss'
import { createApp,createVNode } from 'vue'
import App from './App.vue'
import './assets/styles/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 全局引入UI库的icon
// 自动引入icon https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58
import router from './router/index'
import './utils/http'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 创建Icon组件
export const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(ElementPlusIconsVue[icon as keyof typeof ElementPlusIconsVue])
}

// 注册Icon组件
app.component('Icon', Icon) // 动态icon
app.use(router)
app.mount('#app')
