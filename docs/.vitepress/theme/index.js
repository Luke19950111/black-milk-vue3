import DefaultTheme from 'vitepress/theme'
import './custom.css'

import Button from '../../../src/components/Button.vue'
import ButtonGroup from '../../../src/components/ButtonGroup.vue'
import Icon from '../../../src/components/Icon.vue'
import Input from '../../../src/components/Input.vue'
import Row from '../../../src/components/Row.vue'
import Col from '../../../src/components/Col.vue'
import Layout from '../../../src/components/Layout.vue'
import Header from '../../../src/components/Header.vue'
import Content from '../../../src/components/Content.vue'
import Footer from '../../../src/components/Footer.vue'
import Sider from '../../../src/components/Sider.vue'
import Toast from '../../../src/components/Toast.vue'
import ToastPlugin from '../../../src/components/toast-plugin.js'
import Tabs from '../../../src/components/Tabs.vue'
import TabsHead from '../../../src/components/TabsHead.vue'
import TabsBody from '../../../src/components/TabsBody.vue'
import TabsItem from '../../../src/components/TabsItem.vue'
import TabsPane from '../../../src/components/TabsPane.vue'
import Popover from '../../../src/components/Popover.vue'
import Collapse from '../../../src/components/Collapse.vue'
import CollapseItem from '../../../src/components/CollapseItem.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GButton', Button)
    app.component('GButtonGroup', ButtonGroup)
    app.component('GIcon', Icon)
    app.component('GInput', Input)
    app.component('GRow', Row)
    app.component('GCol', Col)
    app.component('GLayout', Layout)
    app.component('GHeader', Header)
    app.component('GContent', Content)
    app.component('GFooter', Footer)
    app.component('GSider', Sider)
    app.component('GToast', Toast)
    app.component('GTabs', Tabs)
    app.component('GTabsHead', TabsHead)
    app.component('GTabsBody', TabsBody)
    app.component('GTabsItem', TabsItem)
    app.component('GTabsPane', TabsPane)
    app.component('GPopover', Popover)
    app.component('GCollapse', Collapse)
    app.component('GCollapseItem', CollapseItem)
    app.use(ToastPlugin)
  },
}
