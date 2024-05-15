/// <reference types="svg-sketchy.client-api/types" />
import { basename, dirname, isAbsolute, join } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import { accessSync } from 'node:fs'
import process from 'node:process'
import { Buffer } from 'node:buffer'
import pp from 'puppeteer'
import fg, { isDynamicPattern } from 'fast-glob'
import type { Svg2Roughjs } from 'svg2roughjs'

const cwd = process.cwd()
const clientEntry = 'svg-sketchy.client-api/dist/svg-sketchy.iife.js'
const svgExtReg = /\.svg$/
const extReg = /([^/]+)\.(svg|dot|mmd)$/
const namePattern = '[name]'

type Svg2RoughjsConfig = Partial<Pick<Svg2Roughjs, 'fontFamily' | 'roughConfig' | 'randomize' | 'pencilFilter' | 'sketchPatterns'>>

export enum FileType {
  SVG = 'svg',
  DOT = 'dot',
  MMD = 'mmd',
}

export type SVGSketcherConfig = Svg2RoughjsConfig & {
  root?: string
  target?: string
  output?: string
}

export class SVGSketcher {
  private root: string
  private outputDir: string
  private outputFileName: string = '[name].svg'
  private inputFiles: string[] = []
  private outputFiles: string[] = []
  // @ts-expect-error module resolve in cjs&esm
  private clientPath: string = require?.resolve ? require.resolve(clientEntry) : import.meta.resolve(clientEntry)
  private htmlHead = Buffer.from(`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Svg Sketchy </title>
  </head>
  <body>`)

  private sketchConfig: Svg2RoughjsConfig

  constructor(
    {
      root = cwd,
      target = '*.svg',
      output,
      ...sketchConfig
    }: SVGSketcherConfig = {},
  ) {
    this.root = root
    this.sketchConfig = sketchConfig
    this.parseOutput(output ?? root)
    this.parseSvgFiles(target)
  }

  private parseOutput(output: string) {
    const absOutput = isAbsolute(output) ? output : join(this.root, output)
    const fileName = basename(absOutput)
    if (extReg.test(fileName)) {
      this.outputDir = dirname(absOutput)
      this.outputFileName = fileName
    }
    else {
      this.outputDir = absOutput
    }
  }

  private parseSvgFiles(target: string) {
    this.inputFiles = target.split(' ').reduce((files, pattern) => {
      if (isDynamicPattern(pattern))
        files.push(...fg.sync(this.resolveAbsPath(pattern), { onlyFiles: true }))
      else
        files.push(this.resolveAbsPath(pattern))

      return files
    }, [] as string[])
      .filter((file) => {
        if (!extReg.test(file))
          return false

        try {
          accessSync(file)
          return true
        }
        catch (_) {
          return false
        }
      })
      .sort((next, cur) => svgExtReg.test(cur) ? 1 : -1)

    if (this.inputFiles.length < 1)
      throw new Error(`No .svg, .dot, .mmd files found!`)

    this.outputFiles = this.inputFiles.map((filePath) => {
      const [,name] = basename(filePath).match(extReg)
      return join(this.outputDir, this.outputFileName.replace(namePattern, name))
    })
  }

  private resolveAbsPath(path: string) {
    return (isAbsolute(path) ? path : join(this.root, path)).replace(/\\/g, '/')
  }

  private async computeHtml() {
    const SVG_FILES = []
    const otherFiles = []
    const svgs = []
    const others = []

    const [clientJs] = await Promise.all([
      readFile(this.clientPath),

      ...this.inputFiles.map(async (file, index) => {
        let dsl = null
        let fileType = FileType.SVG
        const content = await readFile(file)
        const out = this.outputFiles[index]

        if (svgExtReg.test(file)) {
          svgs.push(content)
        }
        else {
          otherFiles.push(file)
          others.push(content)
          dsl = content.toString()
          fileType = file.includes(FileType.DOT) ? FileType.DOT : FileType.MMD
        }

        SVG_FILES.push({ out, dsl, type: fileType })
      }),
    ])

    const scriptOpenTag
      = Buffer.from('<script>')
    const scriptCloseTag
      = Buffer.from('</script>')

    const htmlBuf = Buffer.concat([
      this.htmlHead,
      ...svgs,
      scriptOpenTag,
      Buffer.from(`
        window.SVG_FILES=${JSON.stringify(SVG_FILES)};
        window.SKETCH_CONFIG=${JSON.stringify(this.sketchConfig)};
      `),
      scriptCloseTag,
      scriptOpenTag,
      clientJs,
      scriptCloseTag,
      Buffer.from('</body></html>'),
    ])

    return htmlBuf
  }

  async run() {
    const browser = await pp.launch({ headless: true })
    const page = await browser.newPage()

    const htmlBuf = await this.computeHtml()
    await page.setContent(htmlBuf!.toString())
    const results = await page.evaluate(async () => {
      const svgDoms = document.querySelectorAll('svg')
      window.SVG_FILES.forEach((svgFile, index) => {
        if (svgFile.type === 'svg')
          svgFile.dsl = svgDoms[index]
      })
      const svgs = await window.sketchSvg(window.SVG_FILES)

      // @ts-expect-error it's ok reading value & reason from PromiseSettledResult
      return svgs.map(({ value, reason }) => {
        return {
          error: reason?.toString() || (value ? undefined : 'sketch error'),
          svg: value?.outerHTML,
        }
      })
    })

    await Promise.allSettled(results.map((re, index) => {
      if (!re.error)
        return writeFile(this.outputFiles[index], re.svg)

      return null
    }))

    await page.close()
    await browser.close()

    return results.map((re, index) => ({
      ...re,
      file: this.inputFiles[index],
      out: this.outputFiles[index],
    }))
  }
}
