import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import Hello from './Hello.vue'
// 创建应用
const app = createApp(App)
// 创建pinia
const pinia = createPinia()

// 安装插件
app.use(pinia)

app.component('Hello', Hello)
app.config.globalProperties.x = 123
declare module 'vue' {
  interface ComponentCustomProperties {
     x: number
  }
}
app.directive('beauty', (element, binding) => {
  console.log(binding)
  element.innerText += Number(binding.value)
  element.style.color = 'red'
})

// 挂载应用
app.mount('#app')