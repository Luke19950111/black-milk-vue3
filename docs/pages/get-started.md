# 快速上手

## Hello World

引入 `Button` 组件：

```js
import { createApp } from 'vue'
import { Button } from 'black-milk-vue3'

const app = createApp({
  template: `
    <div>
      <g-button>默认按钮</g-button>
    </div>
  `,
})

app.component('g-button', Button)
app.mount('#app')
```

## 使用 Toast 插件

Toast 需要通过插件方式注册：

```js
import { createApp } from 'vue'
import { ToastPlugin } from 'black-milk-vue3'

const app = createApp(App)
app.use(ToastPlugin)
app.mount('#app')
```

注册后即可在组件中通过 `$toast` 调用：

```js
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
proxy.$toast('提示消息', { position: 'top', autoClose: 3 })
```
