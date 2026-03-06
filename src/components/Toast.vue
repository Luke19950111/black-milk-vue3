<template>
  <div class="wrapper-toast" :class="toastClasses">
    <div class="toast" ref="toastRef">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="htmlContent"></div>
      </div>
      <div class="line" ref="lineRef"></div>
      <span class="close" v-if="closeButton" @click="onCloseClick">{{ closeButton.text }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  autoClose: {
    type: [Boolean, Number],
    default: 5,
    validator(value) {
      return value === false || typeof value === 'number'
    },
  },
  closeButton: {
    type: Object,
    default: () => ({
      text: '关闭',
      callback: undefined,
    }),
  },
  enableHtml: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'bottom', 'middle'].includes(value)
    },
  },
  htmlContent: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close'])

const toastRef = ref(null)
const lineRef = ref(null)

const toastClasses = computed(() => ({
  [`position-${props.position}`]: true,
}))

function updateStyle() {
  nextTick(() => {
    if (toastRef.value && lineRef.value) {
      lineRef.value.style.height = `${toastRef.value.getBoundingClientRect().height}px`
    }
  })
}

function doAutoClose() {
  if (props.autoClose) {
    setTimeout(() => {
      close()
    }, props.autoClose * 1000)
  }
}

function close() {
  emit('close')
}

function onCloseClick() {
  close()
  if (props.closeButton && typeof props.closeButton.callback === 'function') {
    props.closeButton.callback()
  }
}

onMounted(() => {
  updateStyle()
  doAutoClose()
})

defineExpose({ close })
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: 0.5s;

@keyframes slide-up {
  0% { opacity: 0; transform: translateY(100%); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slide-down {
  0% { opacity: 0; transform: translateY(-100%); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.wrapper-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;

  &.position-top {
    top: 0;

    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }

  &.position-bottom {
    bottom: 0;

    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);

    .toast {
      animation: fade-in $animation-duration;
    }
  }
}

.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;
  display: flex;
  align-items: center;
  color: #ffffff;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}

.message {
  padding: 8px 0;
}

.close {
  margin-left: 16px;
  flex-shrink: 0;
  cursor: pointer;
}

.line {
  border-left: 1px solid #666666;
  margin-left: 16px;
}
</style>
