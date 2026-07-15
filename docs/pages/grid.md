# Grid 栅格

## 24 网格

<div class="demo-block">
  <GRow class="demo-row" style="margin-bottom: 8px;">
    <GCol :span="8"><div class="demo-col">8</div></GCol>
    <GCol :span="8"><div class="demo-col">8</div></GCol>
    <GCol :span="8"><div class="demo-col">8</div></GCol>
  </GRow>
  <GRow class="demo-row" style="margin-bottom: 8px;">
    <GCol :span="6"><div class="demo-col">6</div></GCol>
    <GCol :span="6"><div class="demo-col">6</div></GCol>
    <GCol :span="6"><div class="demo-col">6</div></GCol>
    <GCol :span="6"><div class="demo-col">6</div></GCol>
  </GRow>
  <GRow class="demo-row" style="margin-bottom: 8px;">
    <GCol :span="4"><div class="demo-col">4</div></GCol>
    <GCol :span="4"><div class="demo-col">4</div></GCol>
    <GCol :span="4"><div class="demo-col">4</div></GCol>
    <GCol :span="4"><div class="demo-col">4</div></GCol>
    <GCol :span="4"><div class="demo-col">4</div></GCol>
    <GCol :span="4"><div class="demo-col">4</div></GCol>
  </GRow>
  <GRow class="demo-row">
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
    <GCol :span="2"><div class="demo-col">2</div></GCol>
  </GRow>
</div>

```html
<g-row class="demo-row">
  <g-col :span="8"><div class="demo-col">8</div></g-col>
  <g-col :span="8"><div class="demo-col">8</div></g-col>
  <g-col :span="8"><div class="demo-col">8</div></g-col>
</g-row>

<g-row class="demo-row">
  <g-col :span="6"><div class="demo-col">6</div></g-col>
  <g-col :span="6"><div class="demo-col">6</div></g-col>
  <g-col :span="6"><div class="demo-col">6</div></g-col>
  <g-col :span="6"><div class="demo-col">6</div></g-col>
</g-row>

<g-row class="demo-row">
  <g-col :span="4"><div class="demo-col">4</div></g-col>
  <g-col :span="4"><div class="demo-col">4</div></g-col>
  <g-col :span="4"><div class="demo-col">4</div></g-col>
  <g-col :span="4"><div class="demo-col">4</div></g-col>
  <g-col :span="4"><div class="demo-col">4</div></g-col>
  <g-col :span="4"><div class="demo-col">4</div></g-col>
</g-row>

<g-row class="demo-row">
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
  <g-col :span="2"><div class="demo-col">2</div></g-col>
</g-row>
```

## 设置 gutter

<div class="demo-block">
  <GRow :gutter="10" class="demo-row" style="margin-bottom: 8px;">
    <GCol :span="8"><div class="demo-col">8</div></GCol>
    <GCol :span="8"><div class="demo-col">8</div></GCol>
    <GCol :span="8"><div class="demo-col">8</div></GCol>
  </GRow>
  <GRow :gutter="10" class="demo-row">
    <GCol :span="6"><div class="demo-col">6</div></GCol>
    <GCol :span="6"><div class="demo-col">6</div></GCol>
    <GCol :span="6"><div class="demo-col">6</div></GCol>
    <GCol :span="6"><div class="demo-col">6</div></GCol>
  </GRow>
</div>

```html
<g-row :gutter="10" class="demo-row">
  <g-col :span="8"><div class="demo-col">8</div></g-col>
  <g-col :span="8"><div class="demo-col">8</div></g-col>
  <g-col :span="8"><div class="demo-col">8</div></g-col>
</g-row>

<g-row :gutter="10" class="demo-row">
  <g-col :span="6"><div class="demo-col">6</div></g-col>
  <g-col :span="6"><div class="demo-col">6</div></g-col>
  <g-col :span="6"><div class="demo-col">6</div></g-col>
  <g-col :span="6"><div class="demo-col">6</div></g-col>
</g-row>
```

## 设置 offset

<div class="demo-block">
  <GRow class="demo-row" style="margin-bottom: 8px;">
    <GCol :span="8"><div class="demo-col">8</div></GCol>
    <GCol :span="8" :offset="8"><div class="demo-col">8 offset-8</div></GCol>
  </GRow>
  <GRow class="demo-row" style="margin-bottom: 8px;">
    <GCol :span="6" :offset="6"><div class="demo-col">6 offset-6</div></GCol>
    <GCol :span="6" :offset="6"><div class="demo-col">6 offset-6</div></GCol>
  </GRow>
  <GRow class="demo-row">
    <GCol :span="4"><div class="demo-col">4</div></GCol>
    <GCol :span="4" :offset="4"><div class="demo-col">4 offset-4</div></GCol>
    <GCol :span="4" :offset="4"><div class="demo-col">4 offset-4</div></GCol>
  </GRow>
</div>

```html
<g-row class="demo-row">
  <g-col :span="8"><div class="demo-col">8</div></g-col>
  <g-col :span="8" :offset="8"><div class="demo-col">8 offset-8</div></g-col>
</g-row>

<g-row class="demo-row">
  <g-col :span="6" :offset="6"><div class="demo-col">6 offset-6</div></g-col>
  <g-col :span="6" :offset="6"><div class="demo-col">6 offset-6</div></g-col>
</g-row>

<g-row class="demo-row">
  <g-col :span="4"><div class="demo-col">4</div></g-col>
  <g-col :span="4" :offset="4"><div class="demo-col">4 offset-4</div></g-col>
  <g-col :span="4" :offset="4"><div class="demo-col">4 offset-4</div></g-col>
</g-row>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列间距 | `Number` / `String` | `0` |
| align | 水平对齐方式 | `'left'` / `'right'` / `'center'` | — |

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 栅格占据的列数 | `Number` / `String` | — |
| offset | 栅格左侧偏移列数 | `Number` / `String` | — |
| ipad | ≥577px 响应式配置 `{ span, offset }` | `Object` | — |
| narrowPc | ≥769px 响应式配置 `{ span, offset }` | `Object` | — |
| pc | ≥993px 响应式配置 `{ span, offset }` | `Object` | — |
| widePc | ≥1201px 响应式配置 `{ span, offset }` | `Object` | — |
