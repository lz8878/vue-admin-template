<template>
  <svg
    :class="['svg-icon']"
    :fill="fill"
    :width="width"
    :height="height"
    aria-hidden="true"
  >
    <use :xlink:href="getSymbolId"></use>
  </svg>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
    width: {
      type: [Number, String],
      default: '1em',
    },
    height: {
      type: [Number, String],
      default: '1em',
    }
  },
  setup(props) {
    const getSymbolId = computed(() => `#icon-${props.icon}`)

    return {
      getSymbolId,
    }
  },
}
</script>

<style scoped>
.svg-icon {
  display: inline-block;
  vertical-align: -0.125em;
  overflow: hidden;
}
</style>
