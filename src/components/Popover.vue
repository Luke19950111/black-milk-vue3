<template>
  <div class="popover" ref="popoverRef">
    <div
      ref="contentWrapperRef"
      class="content-wrapper"
      v-if="visible"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapperRef" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  position: {
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'right', 'bottom', 'left'].includes(value)
    },
  },
  trigger: {
    type: String,
    default: 'click',
    validator(value) {
      return ['click', 'hover'].includes(value)
    },
  },
})

const visible = ref(false)
const popoverRef = ref(null)
const contentWrapperRef = ref(null)
const triggerWrapperRef = ref(null)

function positionContent() {
  const contentEl = contentWrapperRef.value
  const triggerEl = triggerWrapperRef.value
  if (!contentEl || !triggerEl) return

  document.body.appendChild(contentEl)
  const { width, height, top, left } = triggerEl.getBoundingClientRect()
  const { height: height2 } = contentEl.getBoundingClientRect()

  const positions = {
    top: {
      top: top + window.scrollY,
      left: left + window.scrollX,
    },
    bottom: {
      top: top + window.scrollY + height,
      left: left + window.scrollX,
    },
    left: {
      top: top + window.scrollY + (height - height2) / 2,
      left: left + window.scrollX,
    },
    right: {
      top: top + window.scrollY + (height - height2) / 2,
      left: left + width + window.scrollX,
    },
  }

  contentEl.style.top = positions[props.position].top + 'px'
  contentEl.style.left = positions[props.position].left + 'px'
}

function onClickDocument(e) {
  if (popoverRef.value && (popoverRef.value === e.target || popoverRef.value.contains(e.target))) {
    return
  }
  if (
    contentWrapperRef.value &&
    (contentWrapperRef.value === e.target || contentWrapperRef.value.contains(e.target))
  ) {
    return
  }
  close()
}

function open() {
  visible.value = true
  nextTick(() => {
    positionContent()
    document.addEventListener('click', onClickDocument)
  })
}

function close() {
  visible.value = false
  document.removeEventListener('click', onClickDocument)
}

function onClick(event) {
  if (triggerWrapperRef.value?.contains(event.target)) {
    if (visible.value) {
      close()
    } else {
      open()
    }
  }
}

onMounted(() => {
  if (props.trigger === 'click') {
    popoverRef.value?.addEventListener('click', onClick)
  } else {
    popoverRef.value?.addEventListener('mouseenter', open)
    popoverRef.value?.addEventListener('mouseleave', close)
  }
})

onUnmounted(() => {
  if (props.trigger === 'click') {
    popoverRef.value?.removeEventListener('click', onClick)
  } else {
    popoverRef.value?.removeEventListener('mouseenter', open)
    popoverRef.value?.removeEventListener('mouseleave', close)
  }
})
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;

.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
</style>

<style lang="scss">
$border-color: #333;
$border-radius: 4px;

.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.5));
  background: white;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  z-index: 9998;

  &::before,
  &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before,
    &::after {
      left: 10px;
      border-bottom: none;
    }

    &::before {
      border-top-color: $border-color;
      top: 100%;
    }

    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;

    &::before,
    &::after {
      left: 10px;
      border-top: none;
    }

    &::before {
      border-bottom-color: $border-color;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before,
    &::after {
      left: 100%;
      top: 50%;
      border-right: none;
    }

    &::before {
      border-left-color: $border-color;
      transform: translateY(-50%);
    }

    &::after {
      border-left-color: white;
      transform: translate(-1px, -50%);
    }
  }

  &.position-right {
    margin-left: 10px;

    &::before,
    &::after {
      right: 100%;
      top: 50%;
      border-left: none;
    }

    &::before {
      border-right-color: $border-color;
      transform: translateY(-50%);
    }

    &::after {
      border-right-color: white;
      transform: translate(1px, -50%);
    }
  }
}
</style>
