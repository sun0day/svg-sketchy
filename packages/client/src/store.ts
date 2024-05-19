import type { UploadFileInfo } from 'naive-ui'
import { defineStore } from 'pinia'
import type { SketchOptions } from 'svg-sketchy.client-api'
import { downloadSvg, fetchSvg } from 'svg-sketchy.client-api'
import vscodeSvg from './assets/vscode.svg'
import mindSvg from './assets/mind.svg'
import gitSvg from './assets/github.svg'

export const useUploadSvgs = defineStore('upload-svgs', {
  state: () => {
    return {
      value: [

      ] as UploadFileInfo[],
      selected: '',
    }
  },
  getters: {
    selectedSvg(): UploadFileInfo {
      return this.value.find(svg => svg.id === this.selected)!
    },
    selectedIndex(): number {
      return this.value.findIndex(svg => svg.id === this.selected)
    },
  },
  actions: {
    async init() {
      const svgs = [
        { id: 'vscode', name: 'vscode.svg', url: vscodeSvg },
        { id: 'git', name: 'git.svg', url: gitSvg },
        { id: 'mind', name: 'mind.svg', url: mindSvg },
      ]
      const svgPromises = svgs.map(({ url }) => fetchSvg(url))
      const svgBlobs = await Promise.all(svgPromises)

      this.value = svgs.map((svg, index) => {
        return {
          ...svg,
          id: `${svg.id}_${Date.now()}`,
          status: 'finished',
          file: new File([svgBlobs[index]], svg.name),
        }
      })
      this.selected = this.value[0].id
    },

    upload(file: UploadFileInfo) {
      this.value.unshift({ ...file, status: 'finished' })
      this.selected = file.id
    },

    preview(file: UploadFileInfo) {
      this.selected = file.id
    },

    remove(index: number) {
      const file = this.value.splice(index, 1)

      if (file[0]?.id === this.selected)
        this.selected = this.value[index % this.value.length]?.id || ''
    },
  },
})

export const useSketchOptions = defineStore('sketch-options', {
  state: () => {
    return {
      value: {
        backgroundColor: null,
        randomize: true,
        fontFamily: 'Comic Sans MS, cursive',
        pencilFilter: false,
        sketchPatterns: false,
        roughConfig: {
          fillStyle: 'hachure',
          roughness: 1,
          bowing: 1,
        },
      } as SketchOptions,
    }
  },
})

export const useRefreshSvg = defineStore('refresh-svg', {
  state: () => {
    return { value: Date.now() }
  },
  actions: {
    refresh() {
      this.value = Date.now()
    },
  },
})

export const useToolVisible = defineStore('tool-visible', {
  state: () => {
    return {
      value: {
        settings: true,
      },
    }
  },
  actions: {
    toggleSettings() {
      this.value.settings = !this.value.settings
    },
  },
})

export const useSvgOutput = defineStore('svg-output', {
  state: () => {
    return {
      value: {
        svg: null as SVGSVGElement | null,
        file: '',
      },
    }
  },
  actions: {
    download() {
      if (this.value.svg)
        downloadSvg(this.value.svg, this.value.file)
    },
  },
})
