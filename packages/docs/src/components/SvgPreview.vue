<script setup lang="ts">
import { sketchSvg } from 'svg-sketchy.client-api'
import { watch } from 'vue'
import { useUploadSvgs } from '../store'

const svgs = useUploadSvgs()

watch(svgs.value, async (files) => {
  const sketchResult = (await sketchSvg([{ type: 'svg', dsl: await files[0].file!.text() }]))[0]

  if (sketchResult.value) {
    const container = document.getElementById('svg-preview')!
    const prevSvg = container.childNodes[0]

    if (prevSvg)
      container.removeChild(prevSvg)

    container.appendChild(sketchResult.value)
  }
})
</script>

<template>
  <div id="svg-preview" />
</template>

<style scoped>

</style>
