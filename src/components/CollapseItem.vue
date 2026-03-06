<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

const eventBus = inject('eventBus')
const open = ref(false)

function onSelected(names) {
  open.value = names.indexOf(props.name) >= 0
}

function toggle() {
  if (open.value) {
    eventBus.emit('update:removeSelected', props.name)
  } else {
    eventBus.emit('update:addSelected', props.name)
  }
}

onMounted(() => {
  eventBus.on('update:selected', onSelected)
})

onUnmounted(() => {
  eventBus.off('update:selected', onSelected)
})
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;

.collapseItem {
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
  }

  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }

  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }

  > .content {
    padding: 4px;
  }
}
</style>
