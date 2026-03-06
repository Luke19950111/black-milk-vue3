<template>
  <div id="app" style="padding: 20px; max-width: 960px; margin: 0 auto">
    <h1>Black-Milk UI - Vue 3</h1>

    <!-- Button -->
    <section>
      <h2>Button 按钮</h2>
      <div style="margin-bottom: 10px">
        <Button>默认按钮</Button>
        <Button icon="setting">设置</Button>
        <Button icon="download" icon-position="right">下载</Button>
        <Button :loading="true">加载中</Button>
      </div>
      <div>
        <ButtonGroup>
          <Button icon="left">上一页</Button>
          <Button icon="right" icon-position="right">下一页</Button>
        </ButtonGroup>
      </div>
    </section>

    <hr />

    <!-- Input -->
    <section>
      <h2>Input 输入框</h2>
      <div style="margin-bottom: 10px">
        <Input v-model="inputValue" />
        <span style="margin-left: 10px">输入值: {{ inputValue }}</span>
      </div>
      <div style="margin-bottom: 10px">
        <Input v-model="inputValue" disabled />
      </div>
      <div style="margin-bottom: 10px">
        <Input v-model="inputValue" readonly />
      </div>
      <div>
        <Input v-model="inputValue" error="输入有误" />
      </div>
    </section>

    <hr />

    <!-- Grid -->
    <section>
      <h2>Grid 栅格</h2>
      <Row :gutter="20">
        <Col :span="8"><div class="grid-demo">col-8</div></Col>
        <Col :span="8"><div class="grid-demo">col-8</div></Col>
        <Col :span="8"><div class="grid-demo">col-8</div></Col>
      </Row>
      <Row :gutter="20" style="margin-top: 10px">
        <Col :span="6"><div class="grid-demo">col-6</div></Col>
        <Col :span="6" :offset="6"><div class="grid-demo">col-6 offset-6</div></Col>
        <Col :span="6"><div class="grid-demo">col-6</div></Col>
      </Row>
    </section>

    <hr />

    <!-- Layout -->
    <section>
      <h2>Layout 布局</h2>
      <Layout style="border: 1px solid #ccc; min-height: 150px; margin-bottom: 10px">
        <Header><div class="layout-demo header-demo">Header</div></Header>
        <Content><div class="layout-demo content-demo">Content</div></Content>
        <Footer><div class="layout-demo footer-demo">Footer</div></Footer>
      </Layout>

      <Layout style="border: 1px solid #ccc; min-height: 150px">
        <Header><div class="layout-demo header-demo">Header</div></Header>
        <Layout>
          <Sider><div class="layout-demo sider-demo">Sider</div></Sider>
          <Content><div class="layout-demo content-demo">Content</div></Content>
        </Layout>
        <Footer><div class="layout-demo footer-demo">Footer</div></Footer>
      </Layout>
    </section>

    <hr />

    <!-- Tabs -->
    <section>
      <h2>Tabs 标签页</h2>
      <Tabs :selected="selectedTab">
        <TabsHead>
          <TabsItem name="tab1">标签1</TabsItem>
          <TabsItem name="tab2">标签2</TabsItem>
          <TabsItem name="tab3" disabled>标签3(禁用)</TabsItem>
          <template #action>
            <Button>额外操作</Button>
          </template>
        </TabsHead>
        <TabsBody>
          <TabsPane name="tab1">标签1的内容</TabsPane>
          <TabsPane name="tab2">标签2的内容</TabsPane>
          <TabsPane name="tab3">标签3的内容</TabsPane>
        </TabsBody>
      </Tabs>
    </section>

    <hr />

    <!-- Toast -->
    <section>
      <h2>Toast 弹出提示</h2>
      <div>
        <Button @click="showToast('top')">顶部弹出</Button>
        <Button @click="showToast('middle')">中间弹出</Button>
        <Button @click="showToast('bottom')">底部弹出</Button>
        <Button @click="showToastWithCallback">带回调的 Toast</Button>
      </div>
    </section>

    <hr />

    <!-- Popover -->
    <section>
      <h2>Popover 弹出框</h2>
      <div style="display: flex; gap: 20px; flex-wrap: wrap">
        <Popover position="top">
          <template #content>
            <div>上方弹出内容</div>
          </template>
          <Button>上方弹出</Button>
        </Popover>
        <Popover position="bottom">
          <template #content>
            <div>下方弹出内容</div>
          </template>
          <Button>下方弹出</Button>
        </Popover>
        <Popover position="left">
          <template #content>
            <div>左侧弹出内容</div>
          </template>
          <Button>左侧弹出</Button>
        </Popover>
        <Popover position="right">
          <template #content>
            <div>右侧弹出内容</div>
          </template>
          <Button>右侧弹出</Button>
        </Popover>
        <Popover trigger="hover" position="top">
          <template #content>
            <div>Hover 触发</div>
          </template>
          <Button>Hover 触发</Button>
        </Popover>
      </div>
    </section>

    <hr />

    <!-- Collapse -->
    <section>
      <h2>Collapse 折叠面板</h2>
      <Collapse :selected="collapseSelected" @update:selected="collapseSelected = $event">
        <CollapseItem title="标题一" name="1">内容一：这是折叠面板的内容。</CollapseItem>
        <CollapseItem title="标题二" name="2">内容二：这也是折叠面板的内容。</CollapseItem>
        <CollapseItem title="标题三" name="3">内容三：更多的折叠面板内容。</CollapseItem>
      </Collapse>

      <h3 style="margin-top: 16px">手风琴模式</h3>
      <Collapse :selected="collapseSingleSelected" single @update:selected="collapseSingleSelected = $event">
        <CollapseItem title="标题A" name="a">内容A</CollapseItem>
        <CollapseItem title="标题B" name="b">内容B</CollapseItem>
        <CollapseItem title="标题C" name="c">内容C</CollapseItem>
      </Collapse>
    </section>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
import {
  Button,
  ButtonGroup,
  Icon,
  Input,
  Row,
  Col,
  Layout,
  Header,
  Content,
  Footer,
  Sider,
  Tabs,
  TabsHead,
  TabsBody,
  TabsItem,
  TabsPane,
  Popover,
  Collapse,
  CollapseItem,
} from './index.js'

const inputValue = ref('hello')
const selectedTab = ref('tab1')
const collapseSelected = ref(['1'])
const collapseSingleSelected = ref(['a'])

const { proxy } = getCurrentInstance()

function showToast(position) {
  proxy.$toast('这是一条提示消息', {
    position,
    autoClose: 3,
  })
}

function showToastWithCallback() {
  proxy.$toast('带回调的提示', {
    closeButton: {
      text: '知道了',
      callback: () => {
        console.log('Toast 关闭回调被触发')
      },
    },
    autoClose: false,
  })
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

section {
  margin: 20px 0;
}

h1 {
  margin-bottom: 20px;
  color: #1a1a1a;
}

h2 {
  margin-bottom: 12px;
  font-size: 20px;
  color: #333;
}

hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 24px 0;
}

.grid-demo {
  background: #e6f7ff;
  border: 1px solid #91d5ff;
  text-align: center;
  padding: 10px 0;
  border-radius: 4px;
}

.layout-demo {
  text-align: center;
  padding: 16px;
  color: #fff;
}

.header-demo {
  background: #7dbcea;
}

.content-demo {
  background: #108ee9;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-demo {
  background: #7dbcea;
}

.sider-demo {
  background: #3ba0e9;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
