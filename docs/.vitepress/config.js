import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/black-milk-vue3/',
  title: 'Black-Milk UI',
  description: '一个用于学习 Vue 3 组件开发的 UI 框架',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Luke19950111/black-milk-vue3' },
      { text: 'Blog', link: 'http://liukuai.gitee.io/blog' },
    ],
    sidebar: {
      '/pages/': [
        {
          text: '入门',
          collapsed: false,
          items: [
            { text: '安装', link: '/pages/install' },
            { text: '快速上手', link: '/pages/get-started' },
          ],
        },
        {
          text: '组件',
          collapsed: false,
          items: [
            { text: 'Button 按钮', link: '/pages/button' },
            { text: 'Tabs 标签页', link: '/pages/tabs' },
            { text: 'Input 输入框', link: '/pages/input' },
            { text: 'Grid 栅格', link: '/pages/grid' },
            { text: 'Layout 布局', link: '/pages/layout' },
            { text: 'Toast 提示', link: '/pages/toast' },
            { text: 'Popover 弹出框', link: '/pages/popover' },
          ],
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})
