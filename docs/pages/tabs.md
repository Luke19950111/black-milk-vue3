# Tabs 标签页

## 简单用法

<div class="demo-block">
  <GTabs selected="tab1">
    <GTabsHead>
      <GTabsItem name="tab1">标签1</GTabsItem>
      <GTabsItem name="tab2">标签2</GTabsItem>
    </GTabsHead>
    <GTabsBody>
      <GTabsPane name="tab1">标签1的内容</GTabsPane>
      <GTabsPane name="tab2">标签2的内容</GTabsPane>
    </GTabsBody>
  </GTabs>
</div>

```html
<g-tabs selected="tab1">
  <g-tabs-head>
    <g-tabs-item name="tab1">标签1</g-tabs-item>
    <g-tabs-item name="tab2">标签2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="tab1">标签1的内容</g-tabs-pane>
    <g-tabs-pane name="tab2">标签2的内容</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| selected | 当前选中的标签名 | `String` / `Number` | — (必填) |
| direction | 方向 | `'horizontal'` / `'vertical'` | — |

### TabsItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标签唯一标识 | `String` / `Number` | — (必填) |
| disabled | 是否禁用 | `Boolean` | `false` |

### TabsPane Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 与 TabsItem 对应的标识 | `String` / `Number` | — (必填) |

### TabsHead Slots

| 名称 | 说明 |
| --- | --- |
| default | 放置 TabsItem |
| action | 标签头右侧额外操作区 |
