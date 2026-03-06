<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  span: {
    type: [Number, String],
  },
  offset: {
    type: [Number, String],
  },
  ipad: {
    type: Object,
    validator: (v) => Object.keys(v).every((k) => ['span', 'offset'].includes(k)),
  },
  narrowPc: {
    type: Object,
    validator: (v) => Object.keys(v).every((k) => ['span', 'offset'].includes(k)),
  },
  pc: {
    type: Object,
    validator: (v) => Object.keys(v).every((k) => ['span', 'offset'].includes(k)),
  },
  widePc: {
    type: Object,
    validator: (v) => Object.keys(v).every((k) => ['span', 'offset'].includes(k)),
  },
})

const gutter = inject('gutter', 0)

function createClasses(obj, prefix = '') {
  if (!obj) return []
  const arr = []
  if (obj.span) arr.push(`col-${prefix}${obj.span}`)
  if (obj.offset) arr.push(`offset-${prefix}${obj.offset}`)
  return arr
}

const colClass = computed(() => {
  const { span, offset, ipad, narrowPc, pc, widePc } = props
  return [
    ...createClasses({ span, offset }),
    ...createClasses(ipad, 'ipad-'),
    ...createClasses(narrowPc, 'narrow-pc-'),
    ...createClasses(pc, 'pc-'),
    ...createClasses(widePc, 'wide-pc-'),
  ]
})

const colStyle = computed(() => {
  const g = Number(gutter.value ?? gutter) || 0
  return {
    paddingLeft: g / 2 + 'px',
    paddingRight: g / 2 + 'px',
  }
})
</script>

<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc($n / 24 * 100%);
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: calc($n / 24 * 100%);
    }
  }

  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n / 24 * 100%);
      }
    }

    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n / 24 * 100%);
      }
    }
  }

  @media (min-width: 769px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n / 24 * 100%);
      }
    }

    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n / 24 * 100%);
      }
    }
  }

  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n / 24 * 100%);
      }
    }

    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n / 24 * 100%);
      }
    }
  }

  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n / 24 * 100%);
      }
    }

    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n / 24 * 100%);
      }
    }
  }
}
</style>
