<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, provide, toRef } from 'vue'

const props = defineProps({
  gutter: {
    type: [Number, String],
    default: 0,
  },
  align: {
    type: String,
    validator(value) {
      return ['left', 'right', 'center'].includes(value)
    },
  },
})

provide('gutter', toRef(props, 'gutter'))

const rowStyle = computed(() => {
  const g = Number(props.gutter) || 0
  return {
    marginLeft: -g / 2 + 'px',
    marginRight: -g / 2 + 'px',
  }
})

const rowClass = computed(() => {
  return [props.align && `align-${props.align}`]
})
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-right {
    justify-content: flex-end;
  }

  &.align-center {
    justify-content: center;
  }
}
</style>
