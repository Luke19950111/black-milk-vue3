<template>
  <div class="tabs-pane" v-if="active">
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  name: {
    type: [String, Number],
    required: true,
  },
})

const eventBus = inject('eventBus')
const active = ref(false)

function onSelected({ name }) {
  active.value = name === props.name
}

onMounted(() => {
  eventBus.on('update:selected', onSelected)
})

onUnmounted(() => {
  eventBus.off('update:selected', onSelected)
})
</script>

<style lang="scss" scoped>
.tabs-pane {
  padding: 1em;
}
</style>
