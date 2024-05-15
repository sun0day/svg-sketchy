import type { Svg2Roughjs } from 'svg2roughjs'

export function initialize(): void
export function createSvgSketcher(config?: Window['SVG_FILES']): Svg2Roughjs
export const downloadSvg: (svg: SVGSVGElement, out: string) => void
export const sketchSvg: (svgInputs: Window['SVG_FILES']) => Promise<PromiseSettledResult<SVGSVGElement | null>[]>

declare global {
  interface Window {
    SVG_FILES: { out: string, dsl: string | SVGSVGElement, type: 'svg' | 'dot' | 'mmd' }[]
    SKETCH_CONFIG: Pick<Svg2Roughjs, 'fontFamily' | 'roughConfig' | 'randomize' | 'pencilFilter' | 'sketchPatterns'>
    downloadSvg: typeof downloadSvg
    sketchSvg: typeof sketchSvg
  }
}
