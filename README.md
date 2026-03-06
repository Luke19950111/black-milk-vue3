# Black-Milk UI (Vue 3)

一个用于 **学习 Vue 3 组件开发** 的 UI 组件库。

本项目从 [Black-Milk UI](https://luke19950111.github.io/Vui-demo/) (Vue 2 + Options API) 完整迁移而来，使用 **Vue 3 Composition API (`<script setup>`)** 重新实现了全部组件，旨在通过实践掌握以下核心知识：

- Vue 3 组合式 API（`ref`、`reactive`、`computed`、`watch`、生命周期钩子等）
- `<script setup>` 语法糖（`defineProps`、`defineEmits`、`defineExpose`、`defineOptions`）
- `provide / inject` 跨层级通信
- 事件总线模式（mitt）在 Vue 3 中的应用
- `createApp` 动态创建组件实例（Toast 插件）
- Vite 构建工具链
- SCSS 样式与 scoped 作用域

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 框架 | Vue 3.4 |
| API 风格 | Composition API (`<script setup>`) |
| 构建工具 | Vite 4 |
| CSS 预处理 | SCSS |
| 事件总线 | mitt |

## 组件一览

本库包含 **20 个组件** 和 **1 个插件**，涵盖常见 UI 场景：

### 基础组件

| 组件 | 文件 | 说明 |
| --- | --- | --- |
| Icon | `Icon.vue` | SVG 图标，支持 `error`、`info`、`loading`、`download`、`setting`、`left`、`right`、`down`、`awesome` |
| Button | `Button.vue` | 按钮，支持图标、图标位置（左/右）、loading 状态 |
| ButtonGroup | `ButtonGroup.vue` | 按钮组，将多个按钮组合为一体 |
| Input | `Input.vue` | 输入框，支持 `v-model`、disabled、readonly、错误提示 |

### 栅格系统

| 组件 | 文件 | 说明 |
| --- | --- | --- |
| Row | `Row.vue` | 行容器，支持 `gutter`（间距）和 `align`（对齐方式） |
| Col | `Col.vue` | 列，24 栏栅格，支持 `span`、`offset` 及响应式断点（ipad / narrowPc / pc / widePc） |

### 布局组件

| 组件 | 文件 | 说明 |
| --- | --- | --- |
| Layout | `Layout.vue` | 布局容器，自动检测是否包含 Sider 并切换方向 |
| Header | `Header.vue` | 顶部区域 |
| Content | `Content.vue` | 内容区域 |
| Footer | `Footer.vue` | 底部区域 |
| Sider | `Sider.vue` | 侧边栏，支持显示/隐藏动画 |

### 数据展示

| 组件 | 文件 | 说明 |
| --- | --- | --- |
| Tabs | `Tabs.vue` | 标签页容器 |
| TabsHead | `TabsHead.vue` | 标签头部，带动画下划线 |
| TabsItem | `TabsItem.vue` | 单个标签项，支持 disabled |
| TabsBody | `TabsBody.vue` | 标签内容容器 |
| TabsPane | `TabsPane.vue` | 单个标签面板 |
| Collapse | `Collapse.vue` | 折叠面板，支持手风琴模式 |
| CollapseItem | `CollapseItem.vue` | 折叠面板子项 |

### 反馈组件

| 组件 | 文件 | 说明 |
| --- | --- | --- |
| Toast | `Toast.vue` | 轻提示，支持顶部/中间/底部弹出、自动关闭、关闭回调 |
| ToastPlugin | `toast-plugin.js` | Toast 插件，提供 `$toast()` 全局方法 |
| Popover | `Popover.vue` | 弹出框，支持四个方向（top/bottom/left/right）和两种触发方式（click/hover） |

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 `http://localhost:5173`，即可看到所有组件的演示页面。

### 构建

```bash
npm run build
```

## 用法示例

### Button 按钮

```vue
<template>
  <Button>默认按钮</Button>
  <Button icon="setting">设置</Button>
  <Button icon="download" icon-position="right">下载</Button>
  <Button :loading="true">加载中</Button>

  <ButtonGroup>
    <Button icon="left">上一页</Button>
    <Button icon="right" icon-position="right">下一页</Button>
  </ButtonGroup>
</template>

<script setup>
import { Button, ButtonGroup } from './index.js'
</script>
```

### Input 输入框

```vue
<template>
  <Input v-model="value" />
  <Input v-model="value" disabled />
  <Input v-model="value" error="请输入正确内容" />
</template>

<script setup>
import { ref } from 'vue'
import { Input } from './index.js'

const value = ref('')
</script>
```

### Grid 栅格

```vue
<template>
  <Row :gutter="20">
    <Col :span="8">col-8</Col>
    <Col :span="8">col-8</Col>
    <Col :span="8">col-8</Col>
  </Row>

  <!-- 响应式 -->
  <Row>
    <Col :span="24" :ipad="{ span: 12 }" :pc="{ span: 8 }">响应式列</Col>
  </Row>
</template>

<script setup>
import { Row, Col } from './index.js'
</script>
```

### Layout 布局

```vue
<template>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script setup>
import { Layout, Header, Content, Sider, Footer } from './index.js'
</script>
```

### Tabs 标签页

```vue
<template>
  <Tabs selected="tab1">
    <TabsHead>
      <TabsItem name="tab1">标签1</TabsItem>
      <TabsItem name="tab2">标签2</TabsItem>
      <TabsItem name="tab3" disabled>标签3</TabsItem>
    </TabsHead>
    <TabsBody>
      <TabsPane name="tab1">内容1</TabsPane>
      <TabsPane name="tab2">内容2</TabsPane>
      <TabsPane name="tab3">内容3</TabsPane>
    </TabsBody>
  </Tabs>
</template>

<script setup>
import { Tabs, TabsHead, TabsItem, TabsBody, TabsPane } from './index.js'
</script>
```

### Toast 弹出提示

```js
// 在 main.js 中注册插件
import { createApp } from 'vue'
import App from './App.vue'
import { ToastPlugin } from './index.js'

const app = createApp(App)
app.use(ToastPlugin)
app.mount('#app')
```

```vue
<script setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

function showToast() {
  proxy.$toast('这是一条提示', {
    position: 'top',       // 'top' | 'middle' | 'bottom'
    autoClose: 3,          // 秒数，false 则不自动关闭
    closeButton: {
      text: '知道了',
      callback: () => { console.log('已关闭') }
    }
  })
}
</script>
```

### Popover 弹出框

```vue
<template>
  <Popover position="top" trigger="click">
    <template #content="{ close }">
      <div>弹出内容 <button @click="close">关闭</button></div>
    </template>
    <Button>点击弹出</Button>
  </Popover>

  <Popover position="right" trigger="hover">
    <template #content>
      <div>悬浮显示</div>
    </template>
    <Button>悬浮弹出</Button>
  </Popover>
</template>

<script setup>
import { Popover, Button } from './index.js'
</script>
```

### Collapse 折叠面板

```vue
<template>
  <!-- 多选模式 -->
  <Collapse :selected="selected" @update:selected="selected = $event">
    <CollapseItem title="标题一" name="1">内容一</CollapseItem>
    <CollapseItem title="标题二" name="2">内容二</CollapseItem>
    <CollapseItem title="标题三" name="3">内容三</CollapseItem>
  </Collapse>

  <!-- 手风琴模式（同时只展开一个） -->
  <Collapse :selected="['a']" single>
    <CollapseItem title="A" name="a">内容A</CollapseItem>
    <CollapseItem title="B" name="b">内容B</CollapseItem>
  </Collapse>
</template>

<script setup>
import { ref } from 'vue'
import { Collapse, CollapseItem } from './index.js'

const selected = ref(['1'])
</script>
```

## 项目结构

```
black-milk-vue3/
├── index.html                 # 入口 HTML
├── package.json
├── vite.config.js             # Vite 配置
├── src/
│   ├── main.js                # 应用入口，注册 Toast 插件
│   ├── App.vue                # 演示页面，展示所有组件
│   ├── index.js               # 库入口，统一导出所有组件
│   ├── svg.js                 # SVG 图标精灵注入
│   └── components/
│       ├── Icon.vue
│       ├── Button.vue
│       ├── ButtonGroup.vue
│       ├── Input.vue
│       ├── Row.vue
│       ├── Col.vue
│       ├── Layout.vue
│       ├── Header.vue
│       ├── Content.vue
│       ├── Footer.vue
│       ├── Sider.vue
│       ├── Toast.vue
│       ├── toast-plugin.js
│       ├── Tabs.vue
│       ├── TabsHead.vue
│       ├── TabsBody.vue
│       ├── TabsItem.vue
│       ├── TabsPane.vue
│       ├── Popover.vue
│       ├── Collapse.vue
│       └── CollapseItem.vue
```

## Vue 2 到 Vue 3 迁移要点

本项目在迁移过程中涉及以下关键变更，适合对照学习：

| Vue 2 写法 | Vue 3 写法 |
| --- | --- |
| Options API (`data`、`methods`、`computed`) | Composition API (`ref`、`computed`、函数) |
| `new Vue()` 作为事件总线 | `mitt` 库 |
| `$children` 访问子组件 | `provide / inject` |
| `Vue.extend()` + `$mount()` | `createApp()` + `app.mount()` |
| `$destroy()` | `app.unmount()` |
| `destroyed` 生命周期 | `onUnmounted` |
| `value` prop (v-model) | `modelValue` prop |
| `Vue.prototype.$xxx` | `app.config.globalProperties.$xxx` |
| `.sync` 修饰符 | `v-model:propName` 或 `update:propName` 事件 |

## License

MIT
