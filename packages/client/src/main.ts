import { Svg2Roughjs } from 'svg2roughjs'

declare global {
    interface Window {  
      SVG_FILES: string[]
    }
}

function downloadSvg(svg: SVGSVGElement, index: number) {
  const blob = new Blob([svg.outerHTML], {type : 'image/svg+xml'});
  const svgUrl = URL.createObjectURL(blob);
  const aDom = document.createElement('a') 
  aDom.href = svgUrl
  aDom.download = window.SVG_FILES[index]
  document.body.appendChild(aDom)
  aDom.click()
  document.body.removeChild(aDom)
}

document.querySelectorAll('svg')?.forEach(async (svg, index) => {
  const svgConverter = new Svg2Roughjs(document.createElementNS("http://www.w3.org/2000/svg", "svg"))
    svgConverter.svg = svg
    svgConverter.outputType = 0
    const sketchSvg = await svgConverter.sketch()
    
    sketchSvg && downloadSvg(sketchSvg as SVGSVGElement, index)
  })
