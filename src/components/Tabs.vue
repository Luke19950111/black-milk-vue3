<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide, onMounted, useSlots } from 'vue'
import mitt from 'mitt'

const props = defineProps({
  selected: {
    type: [String, Number],
    required: true,
  },
  direction: {
    type: String,
    validator(value) {
      return ['horizontal', 'vertical'].includes(value)
    },
  },
})

const eventBus = mitt()
provide('eventBus', eventBus)

const slots = useSlots()

onMounted(() => {
  eventBus.emit('update:selected', props.selected)
})
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
