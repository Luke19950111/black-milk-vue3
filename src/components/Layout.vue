<template>
  <div class="layout" :class="{ hasSider }">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, useSlots } from 'vue'

const hasSider = ref(false)
const slots = useSlots()

onMounted(() => {
  const defaultSlot = slots.default?.()
  if (defaultSlot) {
    hasSider.value = defaultSlot.some(
      (vnode) => vnode.type?.name === 'GSider' || vnode.type?.__name === 'Sider'
    )
  }
})
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  &.hasSider {
    flex-direction: row;
  }
}
</style>
