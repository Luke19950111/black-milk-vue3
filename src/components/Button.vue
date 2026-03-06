<template>
  <button class="g-button" :class="{ [`icon-${iconPosition}`]: true }" @click="emit('click', $event)">
    <Icon v-if="icon && !loading" :name="icon" class="icon" />
    <Icon v-if="loading" name="loading" class="loading icon" />
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script setup>
import Icon from './Icon.vue'

defineProps({
  icon: {
    type: String,
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator(value) {
      return ['left', 'right'].includes(value)
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: #fff;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>
