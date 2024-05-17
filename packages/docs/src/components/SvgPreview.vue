<script setup lang="ts">
import { sketchSvg } from 'svg-sketchy.client-api'
import { computed, watch } from 'vue'
import svgPanZoom from 'svg-pan-zoom'
import { useUploadSvgs } from '../store'

const svgs = useUploadSvgs()

function computeSvgPreviewSize(svg: SVGSVGElement, container: HTMLElement) {
  const svgSize = svg.getBoundingClientRect()
  const svgRatio = svgSize.width / svgSize.height
  const containerSize = container.getBoundingClientRect()
  const containerWidth = containerSize.width * 0.85
  const containerHeight = containerSize.height * 0.85

  return {
    width: `${
      Math.min(
        containerWidth,
        Math.max(
          svgRatio >= 1 ? containerWidth : containerHeight * svgRatio,
          containerWidth / 2,
        ),
     )
    }px`,
    height: `${
      Math.min(
          containerHeight,
          Math.max(
            svgRatio <= 1 ? containerHeight : containerWidth / svgRatio,
            containerHeight / 2,
          ),
      )
    }px`,
  }
}

watch(svgs, async (fileData) => {
  const selectedSvg = fileData.selectedSvg
  const sketchResult = (await sketchSvg([{ type: 'svg', dsl: await selectedSvg?.file!.text() }]))[0]
  const sketchedDom = (sketchResult as PromiseFulfilledResult<SVGSVGElement>).value

  const root = document.getElementById('svg-preview')!
  const container = root.querySelector('div')!
  const prevSvg = container.childNodes[0]

  if (prevSvg)
    container.removeChild(prevSvg)

  container.style.width = 'auto'
  container.style.height = 'auto'

  if (sketchedDom) {
    container.appendChild(sketchedDom)

    Object.assign(container.style, computeSvgPreviewSize(sketchedDom, root))

    const zoomInst = svgPanZoom(sketchedDom, {
      center: true,
    })

    zoomInst.zoom(0.8)
  }
})
</script>

<template>
  <div id="svg-preview" flex-1 flex justify-center flex-items-center p="16px" w="100%" h="100%" border-l="1px solid [var(--color-divider)]">
    <div bg="[var(--color-bg-preview)]" rd="16px" />
  </div>
</template>

<style>
 #svg-preview {
   svg {
     width: inherit;
     height: inherit;
     cursor: grab;
   }
 }
</style>
