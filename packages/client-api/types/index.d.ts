import type { Svg2Roughjs } from 'svg2roughjs'

export type SketchOptions = Pick<Svg2Roughjs, 'fontFamily' | 'roughConfig' | 'randomize' | 'pencilFilter' | 'sketchPatterns' | 'backgroundColor'>
export function initialize(): void
export function createSvgSketcher(config?: SketchOptions): Svg2Roughjs
export const downloadSvg: (svg: SVGSVGElement, filename: string) => void
export const sketchSvg: (svgInputs: Window['SVG_FILES'], options?: SketchOptions) => Promise<PromiseSettledResult<SVGSVGElement | null>[]>
export const fetchSvg: (url: string) => Promise<Blob>

declare global {
  interface Window {
    SVG_FILES: { dsl: string | SVGSVGElement, type: 'svg' | 'dot' | 'mmd' }[]
    SKETCH_CONFIG: SketchOptions
    downloadSvg: typeof downloadSvg
    sketchSvg: typeof sketchSvg
  }
}
