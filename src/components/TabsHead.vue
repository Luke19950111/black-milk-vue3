<template>
  <div class="tabs-head" ref="headRef">
    <slot></slot>
    <div class="line" ref="lineRef"></div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue'

const eventBus = inject('eventBus')
const headRef = ref(null)
const lineRef = ref(null)

function onSelected({ vm }) {
  if (!vm?.$el || !headRef.value || !lineRef.value) return
  const { width } = vm.$el.getBoundingClientRect()
  const { left: elLeft } = vm.$el.getBoundingClientRect()
  const { left: headLeft } = headRef.value.getBoundingClientRect()
  lineRef.value.style.width = `${width}px`
  lineRef.value.style.left = `${elLeft - headLeft}px`
}

onMounted(() => {
  eventBus.on('update:selected', onSelected)
})

onUnmounted(() => {
  eventBus.off('update:selected', onSelected)
})
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$black: black;
$border-color: #ddd;

.tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $tab-height;
  border-bottom: 1px solid $border-color;
  position: relative;

  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 3px solid $black;
    transition: all 500ms;
  }

  > .action-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
}
</style>
