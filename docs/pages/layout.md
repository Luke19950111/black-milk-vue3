# Layout 布局

## 布局 1

上中下布局。

<div class="demo-block">
  <GLayout style="overflow: hidden;">
    <GHeader><div class="demo-layout demo-header">Header</div></GHeader>
    <GContent><div class="demo-layout demo-content">Content</div></GContent>
    <GFooter><div class="demo-layout demo-footer">Footer</div></GFooter>
  </GLayout>
</div>

```html
<g-layout style="overflow: hidden;">
  <g-header style="height: 50px; background: lightskyblue;">
    Header
  </g-header>
  <g-content style="height: 100px; background: deepskyblue;">
    Content
  </g-content>
  <g-footer style="height: 50px; background: lightskyblue;">
    Footer
  </g-footer>
</g-layout>
```

## 布局 2

上、（侧边 + 内容）、下布局。

<div class="demo-block">
  <GLayout style="overflow: hidden;">
    <GHeader><div class="demo-layout demo-header">Header</div></GHeader>
    <GLayout>
      <GSider><div class="demo-layout demo-sider">Sider</div></GSider>
      <GContent><div class="demo-layout demo-content">Content</div></GContent>
    </GLayout>
    <GFooter><div class="demo-layout demo-footer">Footer</div></GFooter>
  </GLayout>
</div>

```html
<g-layout style="overflow: hidden;">
  <g-header style="height: 50px; background: lightskyblue;">
    Header
  </g-header>
  <g-layout>
    <g-sider style="height: 100px; width: 200px; background: #ddd; color: black;">
      Sider
    </g-sider>
    <g-content style="height: 100px; background: deepskyblue;">
      Content
    </g-content>
  </g-layout>
  <g-footer style="height: 50px; background: lightskyblue;">
    Footer
  </g-footer>
</g-layout>
```

## 布局 3

侧边 + （上、内容、下）布局。

<div class="demo-block">
  <GLayout style="overflow: hidden;">
    <GSider><div class="demo-layout demo-sider">Sider</div></GSider>
    <GLayout>
      <GHeader><div class="demo-layout demo-header">Header</div></GHeader>
      <GContent><div class="demo-layout demo-content">Content</div></GContent>
      <GFooter><div class="demo-layout demo-footer">Footer</div></GFooter>
    </GLayout>
  </GLayout>
</div>

```html
<g-layout style="overflow: hidden;">
  <g-sider style="width: 200px; background: #ddd; color: black;">
    Sider
  </g-sider>
  <g-layout>
    <g-header style="height: 50px; background: lightskyblue;">
      Header
    </g-header>
    <g-content style="height: 100px; background: deepskyblue;">
      Content
    </g-content>
    <g-footer style="height: 50px; background: lightskyblue;">
      Footer
    </g-footer>
  </g-layout>
</g-layout>
```

## API

### Layout

Layout 容器，可嵌套。当子组件中包含 `Sider` 时，自动切换为水平（row）方向。

### Sider

侧边栏，自带显示/隐藏切换功能和滑动过渡动画。
