<script setup lang="ts">
import { cloneSvg, sketchSvg } from 'svg-sketchy.client-api'
import { watch } from 'vue'
import svgPanZoom from 'svg-pan-zoom'
import { useRefreshSvg, useSketchOptions, useSvgOutput, useUploadSvgs } from '../store'
import IconToolkit from './IconToolkit.vue'

const svgs = useUploadSvgs()
const sketchOptions = useSketchOptions()
const refresher = useRefreshSvg()
const svgOutput = useSvgOutput()

function computeSvgPreviewSize(svg: SVGSVGElement, [containerWidth, containerHeight]: number[]) {
  const svgSize = svg.getBoundingClientRect()
  const svgRatio = svgSize.width / svgSize.height

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

watch([svgs, sketchOptions, refresher], async ([nextSvgs, nextOptions]) => {
  const selectedSvg = nextSvgs.selectedSvg
  const sketchResult = (await sketchSvg([{ type: 'svg', dsl: await selectedSvg?.file!.text() }], nextOptions.value))[0]
  const sketchedDom = (sketchResult as PromiseFulfilledResult<SVGSVGElement>).value

  svgOutput.value = {
    svg: sketchedDom && cloneSvg(sketchedDom),
    file: selectedSvg.name,
  }

  const root = document.getElementById('svg-preview')!
  const container = root.querySelector('.svg-container')! as HTMLDivElement
  const prevSvg = container.childNodes[0]

  if (prevSvg)
    container.removeChild(prevSvg)

  // get root size
  const rootSize = root.getBoundingClientRect()
  const rootWidth = rootSize.width * 0.85
  const rootHeight = rootSize.height * 0.85

  container.style.width = 'auto'
  container.style.height = 'auto'
  container.style.background = nextOptions.value.backgroundColor || ''

  if (sketchedDom) {
    // add sketched dom and get sketched dom origin size
    container.appendChild(sketchedDom)

    Object.assign(container.style, computeSvgPreviewSize(sketchedDom, [rootWidth, rootHeight]))

    const zoomInst = svgPanZoom(sketchedDom, {
      center: true,
    })

    zoomInst.zoom(0.8)
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
   svg {
     width: inherit;
     height: inherit;
     cursor: grab;
   }
 }
</style>
