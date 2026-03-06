# Button 按钮

## 简单用法

<div class="demo-block">
  <GButton>默认按钮</GButton>
  <GButton icon="setting">设置</GButton>
  <GButton icon="download" icon-position="right">下载</GButton>
  <GButton :loading="true">加载中</GButton>
</div>

```html
<g-button>默认按钮</g-button>
<g-button icon="setting">设置</g-button>
<g-button icon="download" icon-position="right">下载</g-button>
<g-button :loading="true">加载中</g-button>
```

## 按钮组

<div class="demo-block">
  <GButtonGroup>
    <GButton icon="left">上一页</GButton>
    <GButton icon="right" icon-position="right">下一页</GButton>
  </GButtonGroup>
  <GButtonGroup style="margin-left: 16px;">
    <GButton icon="left">前进</GButton>
    <GButton>中间</GButton>
    <GButton icon="right" icon-position="right">后退</GButton>
  </GButtonGroup>
</div>

```html
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>

<g-button-group>
  <g-button icon="left">前进</g-button>
  <g-button>中间</g-button>
  <g-button icon="right" icon-position="right">后退</g-button>
</g-button-group>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标名称 | `String` | — |
| iconPosition | 图标位置 | `'left'` / `'right'` | `'left'` |
| loading | 是否加载中 | `Boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | `event` |
