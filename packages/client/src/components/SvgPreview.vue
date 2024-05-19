<script setup lang="ts">
import { cloneSvg, sketchSvg } from 'svg-sketchy.client-api'
import { computed, onMounted, watch } from 'vue'
import svgPanZoom from 'svg-pan-zoom'
import { useRefreshSvg, useSketchOptions, useSvgOutput, useUploadSvgs } from '../store'
import IconToolkit from './IconToolkit.vue'

const svgs = useUploadSvgs()
const sketchOptions = useSketchOptions()
const refresher = useRefreshSvg()
const svgOutput = useSvgOutput()
const selectedSvg = computed(() => svgs.selectedSvg)

function setContainerSize(fit: boolean) {
  const root = document.getElementById('svg-preview')!
  const container = root.querySelector('.svg-container')! as HTMLDivElement
  const rootSize = root.getBoundingClientRect()
  const containerWidth = rootSize.width * 0.9
  const containerHeight = rootSize.height * 0.85

  Object.assign(container.style, {
    maxWidth: `${containerWidth}px`,
    maxHeight: `${containerHeight}px`,
    width: fit ? `${containerWidth}px` : 'auto',
    height: fit ? `${containerHeight}px` : 'auto',
  })
}

// watch preview container resize
onMounted(() => {
  new ResizeObserver(() => {
    setContainerSize(true)
  }).observe(document.getElementById('svg-preview')!)
})

watch([selectedSvg, sketchOptions, refresher], async ([nextSelectedSvg, nextOptions]) => {
  const sketchResult = (await sketchSvg([{ type: 'svg', dsl: await nextSelectedSvg?.file!.text() }], nextOptions.value))[0]
  const sketchedDom = (sketchResult as PromiseFulfilledResult<SVGSVGElement>).value

  svgOutput.value = {
    svg: sketchedDom && cloneSvg(sketchedDom),
    file: nextSelectedSvg?.name,
  }

  const root = document.getElementById('svg-preview')!
  const container = root.querySelector('.svg-container')! as HTMLDivElement
  const prevSvg = container.childNodes[0]

  if (prevSvg)
    container.removeChild(prevSvg)

  setContainerSize(true)

  container.style.background = nextOptions.value.backgroundColor || ''

  if (sketchedDom) {
    // add sketched dom and get sketched dom origin size
    container.appendChild(sketchedDom)

    const zoomInst = svgPanZoom(sketchedDom, {
      fit: false,
      center: false,
    })

    zoomInst.zoom(0.9)
  }
})
</script>

<template>
  <div id="svg-preview" position="relative" flex-1 flex justify-center flex-items-center p="16px" w="100%" h="100%">
    <IconToolkit />
    <div class="svg-container" bg="[var(--color-bg-preview)]" rd="16px" />
  </div>
</template>

<style>
 #svg-preview .svg-container {
   overflow: hidden;
   color: transparent;
   svg {
     width: inherit;
     height: inherit;
     cursor: grab;
   }
 }
</style>
