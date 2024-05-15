<script setup lang="ts">
import { sketchSvg } from 'svg-sketchy.client-api'
import { computed, watch } from 'vue'
import { useUploadSvgs } from '../store'

const svgs = useUploadSvgs()
const selectedSvg = computed(() => {
  return svgs.value[0]
})

watch(selectedSvg, async (fileData) => {
  const sketchResult = (await sketchSvg([{ type: 'svg', dsl: await fileData.file!.text() }]))[0]

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
  <div id="svg-preview" flex-1 flex justify-center flex-items-center p="16px" border-l="1px solid #efeff5" />
</template>

<style scoped>

</style>
