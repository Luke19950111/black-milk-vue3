<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const eventBus = inject('eventBus')
</script>

<style lang="scss" scoped>
.tabs-body {
}
</style>
