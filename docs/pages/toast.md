# Toast 提示

使用前需要在入口注册 Toast 插件：

```js
import { createApp } from 'vue'
import { ToastPlugin } from 'black-milk-vue3'

const app = createApp(App)
app.use(ToastPlugin)
```

## this.$toast

<div class="demo-block">
  <GButton @click="showToast('top')">顶部弹出</GButton>
  <GButton @click="showToast('middle')">中间弹出</GButton>
  <GButton @click="showToast('bottom')">底部弹出</GButton>
</div>

<script setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

function showToast(position) {
  proxy.$toast('这是一条提示消息', {
    position,
    autoClose: 3,
  })
}

function showToastCallback() {
  proxy.$toast('点击关闭按钮触发回调', {
    closeButton: {
      text: '知道了',
      callback: () => {
        console.log('Toast 关闭回调被触发')
      },
    },
    autoClose: false,
  })
}

function showToastHtml() {
  proxy.$toast('<strong style="color:#f00;">粗体红色</strong>提示', {
    enableHtml: true,
    autoClose: 3,
  })
}
</script>

```js
proxy.$toast('这是一条提示消息', {
  position: 'top', // 'top' | 'middle' | 'bottom'
  autoClose: 3,
})
```

## 关闭按钮回调

<div class="demo-block">
  <GButton @click="showToastCallback">带回调的 Toast</GButton>
</div>

```js
proxy.$toast('点击关闭按钮触发回调', {
  closeButton: {
    text: '知道了',
    callback: () => {
      console.log('Toast 关闭回调被触发')
    },
  },
  autoClose: false,
})
```

## 支持 HTML

<div class="demo-block">
  <GButton @click="showToastHtml">HTML Toast</GButton>
</div>

```js
proxy.$toast('<strong style="color:#f00;">粗体红色</strong>提示', {
  enableHtml: true,
  autoClose: 3,
})
```

## API

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoClose | 自动关闭延迟（秒），`false` 则不自动关闭 | `Number` / `Boolean` | `5` |
| closeButton | 关闭按钮配置 `{ text, callback }` | `Object` | `{ text: '关闭' }` |
| enableHtml | 是否支持 HTML 内容 | `Boolean` | `false` |
| position | 弹出位置 | `'top'` / `'middle'` / `'bottom'` | `'top'` |
