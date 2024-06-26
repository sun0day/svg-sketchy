import type { Viz } from '@viz-js/viz'
import { instance as VizInstance } from '@viz-js/viz'
import { Svg2Roughjs } from 'svg2roughjs'
import mermaid from 'mermaid'
import type { SketchOptions } from '../types'

let viz: Viz | undefined

function initSvgDom(svg: string) {
  const rootClass = 'svg-virtual-container'
  let root = document.querySelector(`.${rootClass}`)

  if (!root) {
    root = document.createElement('div')
    Object.assign((root as HTMLElement).style, {
      position: 'fixed',
      top: '-10000px',
    })
    document.body.appendChild(root)
  }

  root.className = rootClass
  root.innerHTML = ''

  const container = document.createElement('div')

  const svgDom = new DOMParser().parseFromString(svg, 'image/svg+xml').querySelector('svg')!
  container.appendChild(svgDom)
  root.appendChild(container)

  return svgDom
}

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

// clone svg
export function cloneSvg(svg: SVGSVGElement) {
  const svgStr = svg.outerHTML

  return new DOMParser().parseFromString(svgStr, 'image/svg+xml').querySelector('svg')
}

// fetch svg
export function fetchSvg(url: string) {
  return fetch(url).then(res => res.blob())
}

// sketch svg, dot, mmd
export const sketchSvg = async function (svgInputs: Window['SVG_FILES'], options?: SketchOptions) {
  if (!viz)
    await initialize()

  const svgOutputs = await Promise.allSettled(svgInputs.map(async ({ dsl, type }) => {
    const svgSketcher = createSvgSketcher(options)

    switch (type) {
      case 'dot':
        svgSketcher.svg = viz!.renderSVGElement(dsl as string)
        break
      case 'mmd':
        svgSketcher.svg = initSvgDom((await mermaid.render('x', dsl as string))?.svg)
        break
      default:
        svgSketcher.svg = typeof dsl === 'string' ? initSvgDom(dsl) : dsl
        break
    }

    const sketchSvg = await svgSketcher.sketch()

    return sketchSvg as SVGSVGElement | null
  }))

  return svgOutputs
}

window.downloadSvg = downloadSvg
window.sketchSvg = sketchSvg
