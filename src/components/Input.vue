<template>
  <div class="wrapper" :class="{ error: error }">
    <input
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      type="text"
      @change="emit('change', $event.target.value)"
      @input="emit('update:modelValue', $event.target.value)"
      @focus="emit('focus', $event.target.value)"
      @blur="emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <Icon name="error" class="error-icon" />
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script setup>
import Icon from './Icon.vue'

defineProps({
  modelValue: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue', 'change', 'focus', 'blur'])
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;

.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 0.5em;
  }

  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }

    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }

  &.error {
    > input {
      border-color: $red;
    }
  }
}

.error-icon {
  fill: $red;
}

.error-message {
  color: $red;
}
</style>
