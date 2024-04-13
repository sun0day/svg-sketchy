import {mkdir, rm, readFile, writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {beforeAll, afterAll, vi} from 'vitest';

beforeAll(async () => {
  globalThis.SVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80pt" height="116pt" viewBox="0.00 0.00 80.00 116.00">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 112)">
<title>G</title>
<polygon style="fill:white;stroke:white;" points="-4,4 -4,-112 76,-112 76,4 -4,4"/>
<!-- Hello -->
<g id="node1" class="node"><title>Hello</title>
<ellipse style="fill:none;stroke:black;" cx="36" cy="-90" rx="32.8565" ry="18"/>
<text text-anchor="middle" x="36" y="-85.9" style="font-family:Times New Roman;font-size:14.00;">Hello</text>
</g>
<!-- World -->
<g id="node3" class="node"><title>World</title>
<ellipse style="fill:none;stroke:black;" cx="36" cy="-18" rx="36.1339" ry="18"/>
<text text-anchor="middle" x="36" y="-13.9" style="font-family:Times New Roman;font-size:14.00;">World</text>
</g>
<!-- Hello&#45;&gt;World -->
<g id="edge2" class="edge"><title>Hello-&gt;World</title>
<path style="fill:none;stroke:black;" d="M36,-72C36,-64 36,-55 36,-46"/>
<polygon style="fill:black;stroke:black;" points="39.5001,-46 36,-36 32.5001,-46 39.5001,-46"/>
</g>
</g>
</svg>`;
  globalThis.DOT = `digraph G {Hello->World}`;
  globalThis.EXT = {
    svg: '.svg',
    dot: '.dot'
  };
  globalThis.EXT_CONTENT = {
    svg: globalThis.SVG,
    dot: globalThis.DOT
  };
  globalThis.TMP = resolve(process.cwd(), 'packages/cli/tmp');
  globalThis.reset = () => {
    vi.resetModules();
    vi.clearAllMocks();
  };
  globalThis.mockArgv = (argvs: string[]) => {
    process.argv = process.argv.slice(0, 2).concat(argvs);
  };
  globalThis.createSvgs = async (num: number, type:'svg' | 'dot' = 'svg') => {
    const svgs:string[] = []; 

    await Promise.all(
      new Array(num).fill(0).map(
        (_, index) => {
          const file = index + Date.now() + '';
          svgs.push(file);

          return writeFile(
            resolve(globalThis.TMP, `${file}${globalThis.EXT[type]}`), 
            globalThis.EXT_CONTENT[type]
          );
        }
      )); 

    return () => {
      return Promise.all(svgs.map((file) => {
        return readFile(resolve(globalThis.TMP, `${file}.svg`), {encoding: 'utf-8'});
      }));
    };
  };
  globalThis.initTmp = async () => {
    await rm(globalThis.TMP, {recursive: true, force: true}).catch(() => {});
    await mkdir(globalThis.TMP).catch(() => {});
  };
  globalThis.waitForRejection = async (cb: () => void) => {
    return new Promise((_, reject) => {
      const innerHandler = (err: Error) => {
        process.off("unhandledRejection", innerHandler);
        reject(err);
      };

      process.on('unhandledRejection', innerHandler);
      cb();
    });
  };
});

afterAll(() => {
  rm(globalThis.TMP, {recursive: true, force: true}).catch(_ => {});
});
