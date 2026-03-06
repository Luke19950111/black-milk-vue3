import { createApp, h } from 'vue'
import Toast from './Toast.vue'

let currentToast = null

function createToast({ message, propsData, onClose }) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const toastApp = createApp({
    render() {
      return h(
        Toast,
        {
          ...propsData,
          onClose: () => {
            toastApp.unmount()
            container.remove()
            onClose?.()
          },
        },
        propsData?.enableHtml ? undefined : { default: () => message }
      )
    },
  })

  const vm = toastApp.mount(container)

  return {
    close() {
      const toastComponent = vm.$el?.__vueParentComponent?.subTree?.component
      if (toastComponent?.exposed?.close) {
        toastComponent.exposed.close()
      } else {
        toastApp.unmount()
        container.remove()
        onClose?.()
      }
    },
  }
}

export default {
  install(app) {
    app.config.globalProperties.$toast = function (message, toastOptions = {}) {
      if (currentToast) {
        currentToast.close()
      }

      if (toastOptions.enableHtml) {
        toastOptions.htmlContent = message
      }

      currentToast = createToast({
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        },
      })
    }
  },
}
