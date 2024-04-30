import type { Svg2Roughjs } from 'svg2roughjs'

declare global {
  interface Window {
    SVG_FILES: { out: string, dsl: string | null, type: string }[]
    SKETCH_CONFIG: Pick<Svg2Roughjs, 'fontFamily' | 'roughConfig' | 'randomize' | 'pencilFilter' | 'sketchPatterns'>
    downloadSvg: (svg: SVGSVGElement, out: string) => void
    sketchSvg: () => Promise<PromiseSettledResult<SVGSVGElement | null>[]>
  }
}

export {}
