<template>
  <div class="button-group" ref="groupRef">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const groupRef = ref(null)

onMounted(() => {
  if (groupRef.value) {
    for (const node of groupRef.value.children) {
      const name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`button-group 的子元素仅支持 g-button，不应该使用 ${name}`)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
$border-radius: 4px;

.button-group {
  display: inline-flex;
  vertical-align: middle;

  > :deep(.g-button) {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
