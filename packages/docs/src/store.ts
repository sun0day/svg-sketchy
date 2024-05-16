import type { UploadFileInfo } from 'naive-ui'
import { defineStore } from 'pinia'
import { fetchSvg } from 'svg-sketchy.client-api'
import vscodeSvg from './assets/vscode.svg'
import mindSvg from './assets/mind.svg'
import gitSvg from './assets/github.svg'

export const useUploadSvgs = defineStore('upload-svgs', {
  state: () => {
    return {
      value: [

      ] as UploadFileInfo[],
    }
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
          status: 'finished',
          file: new File([svgBlobs[index]], svg.name),
        }
      })
    },
  },
})
