<template>
  <Transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible = false">hide</button>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({ name: 'GSider' })

const visible = ref(true)
</script>

<style lang="scss" scoped>
.sider {
  position: relative;

  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  margin-left: -200px;
}
</style>
