<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, ref, computed, onMounted, onUnmounted, getCurrentInstance } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: [String, Number],
    required: true,
  },
})

const emit = defineEmits(['click'])

const eventBus = inject('eventBus')
const active = ref(false)
const instance = getCurrentInstance()

const classes = computed(() => ({
  active: active.value,
  disabled: props.disabled,
}))

function onSelected({ name }) {
  active.value = name === props.name
}

function onClick() {
  if (props.disabled) return
  eventBus.emit('update:selected', { name: props.name, vm: instance.proxy })
  emit('click', instance.proxy)
}

onMounted(() => {
  eventBus.on('update:selected', onSelected)
})

onUnmounted(() => {
  eventBus.off('update:selected', onSelected)
})
</script>

<style lang="scss" scoped>
$black: black;
$disabled-text-color: gray;

.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  &.active {
    font-weight: bold;
    color: $black;
  }

  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>
