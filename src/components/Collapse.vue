<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide, onMounted, onUnmounted } from 'vue'
import mitt from 'mitt'

const props = defineProps({
  single: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:selected'])

const eventBus = mitt()
provide('eventBus', eventBus)

function onAddSelected(name) {
  let selectedCopy = [...props.selected]
  if (props.single) {
    selectedCopy = [name]
  } else {
    selectedCopy.push(name)
  }
  eventBus.emit('update:selected', selectedCopy)
  emit('update:selected', selectedCopy)
}

function onRemoveSelected(name) {
  const selectedCopy = [...props.selected]
  const index = selectedCopy.indexOf(name)
  if (index >= 0) {
    selectedCopy.splice(index, 1)
  }
  eventBus.emit('update:selected', selectedCopy)
  emit('update:selected', selectedCopy)
}

onMounted(() => {
  eventBus.emit('update:selected', props.selected)
  eventBus.on('update:addSelected', onAddSelected)
  eventBus.on('update:removeSelected', onRemoveSelected)
})

onUnmounted(() => {
  eventBus.off('update:addSelected', onAddSelected)
  eventBus.off('update:removeSelected', onRemoveSelected)
})
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;

.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
