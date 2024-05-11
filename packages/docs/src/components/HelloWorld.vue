<script lang="ts">
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'

export default defineComponent({
  components: {
    NButton,
  },
})
</script>

<template>
  <NButton>
    If you don't use vfont and want change global fonts by customzing theme, you need to use n-global-style to achieve that. Components' font won't be responsive to theme-overrides without n-global-style.
  </NButton>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
