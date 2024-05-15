import type { Viz } from '@viz-js/viz'
import { instance as VizInstance } from '@viz-js/viz'
import { Svg2Roughjs } from 'svg2roughjs'
import mermaid from 'mermaid'

let viz: Viz | undefined

export async function initialize() {
  mermaid.initialize({ startOnLoad: false })
  viz = await VizInstance()
}

export function createSvgSketcher(config: Window['SKETCH_CONFIG'] = window.SKETCH_CONFIG) {
  const svgSketcher = new Svg2Roughjs(document.createElementNS('http://www.w3.org/2000/svg', 'svg'))
  svgSketcher.outputType = 0

  Object.keys(config ?? {}).forEach((key) => {
    // @ts-expect-error Svg2Roughjs key
    svgSketcher[key] = config[key as keyof Window['SKETCH_CONFIG']]
  })

  return svgSketcher
}

// download svg
export function downloadSvg(svg: SVGSVGElement, filename: string) {
  const blob = new Blob([svg.outerHTML], { type: 'image/svg+xml' })
  const svgUrl = URL.createObjectURL(blob)
  const aDom = document.createElement('a')

  aDom.style.visibility = 'hidden'
  aDom.href = svgUrl
  aDom.download = filename
  document.body.appendChild(aDom)
  aDom.click()
  document.body.removeChild(aDom)
}

// sketch svg, dot, mmd
export const sketchSvg = async function (svgInputs: Window['SVG_FILES']) {
  if (!viz)
    await initialize()

  const svgOutputs = await Promise.allSettled(svgInputs.map(async ({ dsl, type }, index) => {
    const svgSketcher = createSvgSketcher()

    let mmdContainer = null
    const mmdId = `mmd-${index}`

    switch (type) {
      case 'dot':
        svgSketcher.svg = viz!.renderSVGElement(dsl as string)
        break
      case 'mmd':
        mmdContainer = document.createElement('div')
        document.body.appendChild(mmdContainer)
        mmdContainer.innerHTML = (await mermaid.render(mmdId, dsl as string))?.svg
        svgSketcher.svg = document.querySelector(`#${mmdId}`)!
        break
      default:
        svgSketcher.svg = dsl as SVGSVGElement
        break
    }

    const sketchSvg = await svgSketcher.sketch()

    if (mmdContainer)
      document.body.removeChild(mmdContainer)

    return sketchSvg as SVGSVGElement | null
  }))

  return svgOutputs
}

window.downloadSvg = downloadSvg
window.sketchSvg = sketchSvg
