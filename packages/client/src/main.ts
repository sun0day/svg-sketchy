import { instance as VizInstance } from '@viz-js/viz';
import { Svg2Roughjs } from 'svg2roughjs';

declare global {
    interface Window {  
      SVG_FILES: {out: string, dsl: string | null, type: string}[],
      SKETCH_CONFIG: Pick<Svg2Roughjs, 'fontFamily' | 'roughConfig' | 'randomize' | 'pencilFilter' | 'sketchPatterns'>
    }
}

const SVG_DOMS = document.querySelectorAll('svg') ?? [];

// download svg
function downloadSvg(svg: SVGSVGElement, out: string) {
  const blob = new Blob([svg.outerHTML], {type : 'image/svg+xml'});
  const svgUrl = URL.createObjectURL(blob);
  const aDom = document.createElement('a'); 

  aDom.href = svgUrl;
  aDom.download = out; 
  document.body.appendChild(aDom);
  aDom.click();
  document.body.removeChild(aDom);
}

(async function() {
  const viz = await VizInstance();

  window.SVG_FILES.forEach(async ({out, dsl, type}, index) => {
    const svgConverter = new Svg2Roughjs(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
    svgConverter.outputType = 0;

    Object.keys(window.SKETCH_CONFIG ?? {}).forEach((key)=> {
      // @ts-expect-error Svg2Roughjs key
      svgConverter[key] = window.SKETCH_CONFIG[key as keyof Window['SKETCH_CONFIG']];
    });

    svgConverter.svg = type === 'svg' ? SVG_DOMS[index] : viz.renderSVGElement(dsl!); 

    const sketchSvg = await svgConverter.sketch();
      
    sketchSvg && downloadSvg(sketchSvg as SVGSVGElement, out);
  });
})();

