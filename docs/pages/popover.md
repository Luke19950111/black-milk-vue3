# Popover 弹出框

## 简单用法

<div class="demo-block" style="display: flex; gap: 20px; flex-wrap: wrap;">
  <GPopover position="top">
    <template #content>
      <div>上方弹出的内容</div>
    </template>
    <GButton>上方弹出</GButton>
  </GPopover>
  <GPopover position="bottom">
    <template #content>
      <div>下方弹出的内容</div>
    </template>
    <GButton>下方弹出</GButton>
  </GPopover>
  <GPopover position="left">
    <template #content>
      <div>左侧弹出的内容</div>
    </template>
    <GButton>左侧弹出</GButton>
  </GPopover>
  <GPopover position="right">
    <template #content>
      <div>右侧弹出的内容</div>
    </template>
    <GButton>右侧弹出</GButton>
  </GPopover>
</div>

```html
<g-popover position="top">
  <template #content>
    <div>上方弹出的内容</div>
  </template>
  <g-button>上方弹出</g-button>
</g-popover>

<g-popover position="bottom">
  <template #content>
    <div>下方弹出的内容</div>
  </template>
  <g-button>下方弹出</g-button>
</g-popover>

<g-popover position="left">
  <template #content>
    <div>左侧弹出的内容</div>
  </template>
  <g-button>左侧弹出</g-button>
</g-popover>

<g-popover position="right">
  <template #content>
    <div>右侧弹出的内容</div>
  </template>
  <g-button>右侧弹出</g-button>
</g-popover>
```

## Hover 触发

<div class="demo-block" style="display: flex; gap: 20px; flex-wrap: wrap;">
  <GPopover position="top" trigger="hover">
    <template #content>
      <div>上方 hover 弹出</div>
    </template>
    <GButton>上方 hover</GButton>
  </GPopover>
  <GPopover position="bottom" trigger="hover">
    <template #content>
      <div>下方 hover 弹出</div>
    </template>
    <GButton>下方 hover</GButton>
  </GPopover>
  <GPopover position="left" trigger="hover">
    <template #content>
      <div>左侧 hover 弹出</div>
    </template>
    <GButton>左侧 hover</GButton>
  </GPopover>
  <GPopover position="right" trigger="hover">
    <template #content>
      <div>右侧 hover 弹出</div>
    </template>
    <GButton>右侧 hover</GButton>
  </GPopover>
</div>

```html
<g-popover position="top" trigger="hover">
  <template #content>
    <div>上方 hover 弹出</div>
  </template>
  <g-button>上方 hover</g-button>
</g-popover>

<g-popover position="bottom" trigger="hover">
  <template #content>
    <div>下方 hover 弹出</div>
  </template>
  <g-button>下方 hover</g-button>
</g-popover>

<g-popover position="left" trigger="hover">
  <template #content>
    <div>左侧 hover 弹出</div>
  </template>
  <g-button>左侧 hover</g-button>
</g-popover>

<g-popover position="right" trigger="hover">
  <template #content>
    <div>右侧 hover 弹出</div>
  </template>
  <g-button>右侧 hover</g-button>
</g-popover>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 弹出位置 | `'top'` / `'bottom'` / `'left'` / `'right'` | `'top'` |
| trigger | 触发方式 | `'click'` / `'hover'` | `'click'` |

### Slots

| 名称 | 说明 | 插槽参数 |
| --- | --- | --- |
| default | 触发元素 | — |
| content | 弹出框内容 | `{ close }` 关闭方法 |
