# Collapse 折叠面板

## 多选模式

<div class="demo-block">
  <GCollapse :selected="collapseSelected" @update:selected="collapseSelected = $event">
    <GCollapseItem title="标题一" name="1">内容一：这是折叠面板的内容。</GCollapseItem>
    <GCollapseItem title="标题二" name="2">内容二：这也是折叠面板的内容。</GCollapseItem>
    <GCollapseItem title="标题三" name="3">内容三：更多的折叠面板内容。</GCollapseItem>
  </GCollapse>
</div>

```html
<g-collapse :selected="selected" @update:selected="selected = $event">
  <g-collapse-item title="标题一" name="1">内容一</g-collapse-item>
  <g-collapse-item title="标题二" name="2">内容二</g-collapse-item>
  <g-collapse-item title="标题三" name="3">内容三</g-collapse-item>
</g-collapse>
```

```js
import { ref } from 'vue'

const selected = ref(['1'])
```

## 手风琴模式

<div class="demo-block">
  <GCollapse :selected="collapseSingleSelected" single @update:selected="collapseSingleSelected = $event">
    <GCollapseItem title="标题 A" name="a">内容 A</GCollapseItem>
    <GCollapseItem title="标题 B" name="b">内容 B</GCollapseItem>
    <GCollapseItem title="标题 C" name="c">内容 C</GCollapseItem>
  </GCollapse>
</div>

<script setup>
import { ref } from 'vue'

const collapseSelected = ref(['1'])
const collapseSingleSelected = ref(['a'])
</script>

```html
<g-collapse :selected="selected" single @update:selected="selected = $event">
  <g-collapse-item title="标题 A" name="a">内容 A</g-collapse-item>
  <g-collapse-item title="标题 B" name="b">内容 B</g-collapse-item>
  <g-collapse-item title="标题 C" name="c">内容 C</g-collapse-item>
</g-collapse>
```

```js
import { ref } from 'vue'

const selected = ref(['a'])
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| selected | 当前展开项的 name 列表 | `Array` | `[]` |
| single | 是否开启手风琴模式 | `Boolean` | `false` |

### Collapse Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:selected | 展开项变化时触发 | `selected` |

### CollapseItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 面板标题 | `String` | - |
| name | 面板唯一标识 | `String` | - |

### CollapseItem Slots

| 名称 | 说明 |
| --- | --- |
| default | 面板内容 |
