# Input 输入框

## 简单使用

<div class="demo-block">
  <div style="margin-bottom: 8px;"><GInput model-value="普通输入框" /></div>
  <div style="margin-bottom: 8px;"><GInput model-value="只读" readonly /></div>
  <div style="margin-bottom: 8px;"><GInput model-value="禁用" disabled /></div>
  <div><GInput model-value="" error="输入有误" /></div>
</div>

```html
<g-input model-value="普通输入框" />
<g-input model-value="只读" readonly />
<g-input model-value="禁用" disabled />
<g-input model-value="" error="输入有误" />
```

## 双向绑定

<div class="demo-block">
  <GInput v-model="inputVal" />
  <span style="margin-left: 10px;">输入值：{{ inputVal }}</span>
</div>

<script setup>
import { ref } from 'vue'

const inputVal = ref('hello')
</script>

```html
<g-input v-model="value" />
<span>输入值：{{ value }}</span>
```

```js
import { ref } from 'vue'
const value = ref('hello')
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | `String` | — |
| disabled | 是否禁用 | `Boolean` | `false` |
| readonly | 是否只读 | `Boolean` | `false` |
| error | 错误提示文字 | `String` | — |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 输入时触发 | `value` |
| change | 值变化时触发 | `value` |
| focus | 获得焦点时触发 | `value` |
| blur | 失去焦点时触发 | `value` |
