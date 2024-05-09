import type { Viz } from '@viz-js/viz'
import { instance as VizInstance } from '@viz-js/viz'
import { Svg2Roughjs } from 'svg2roughjs'
import mermaid from 'mermaid'

let viz: Viz | undefined

async function initialize() {
  mermaid.initialize({ startOnLoad: false })
  viz = await VizInstance()
}

function createSvgSketcher() {
  const svgSketcher = new Svg2Roughjs(document.createElementNS('http://www.w3.org/2000/svg', 'svg'))
  svgSketcher.outputType = 0

  Object.keys(window.SKETCH_CONFIG ?? {}).forEach((key) => {
    // @ts-expect-error Svg2Roughjs key
    svgSketcher[key] = window.SKETCH_CONFIG[key as keyof Window['SKETCH_CONFIG']]
  })

  return svgSketcher
}

// download svg
window.downloadSvg = (svg: SVGSVGElement, out: string) => {
  const blob = new Blob([svg.outerHTML], { type: 'image/svg+xml' })
  const svgUrl = URL.createObjectURL(blob)
  const aDom = document.createElement('a')

  aDom.href = svgUrl
  aDom.download = out
  document.body.appendChild(aDom)
  aDom.click()
  document.body.removeChild(aDom)
}

// sketch svg, dot, mmd
window.sketchSvg = async function (svgInputs: Window['SVG_FILES']) {
  if (!viz)
    await initialize()

  const SVG_DOMS = document.querySelectorAll('svg') ?? []
  const svgOutputs = await Promise.allSettled(svgInputs.map(async ({ dsl, type }, index) => {
    const svgSketcher = createSvgSketcher()

    let mmdContainer = null
    const mmdId = `mmd-${index}`

    switch (type) {
      case 'dot':
        svgSketcher.svg = viz!.renderSVGElement(dsl!)
        break
      case 'mmd':
        mmdContainer = document.createElement('div')
        document.body.appendChild(mmdContainer)
        mmdContainer.innerHTML = (await mermaid.render(mmdId, dsl!))?.svg
        svgSketcher.svg = document.querySelector(`#${mmdId}`)!
        break
      default:
        svgSketcher.svg = SVG_DOMS[index]
        break
    }

    const sketchSvg = await svgSketcher.sketch()

    if (mmdContainer)
      document.body.removeChild(mmdContainer)

    return sketchSvg as SVGSVGElement | null
  }))

  return svgOutputs
}
