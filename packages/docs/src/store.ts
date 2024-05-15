import type { UploadFileInfo } from 'naive-ui'
import { defineStore } from 'pinia'

export const useDotCode = defineStore('dot-code', {
  state: () => {
    return { code: `digraph G { 
  Hello -> World 
}` }
  },
  actions: {
    increment() {
    //  this.count++
    },
  },
})

export const useMmdCode = defineStore('mmd-code', {
  state: () => {
    return { code: `graph TB
  hello --> world
` }
  },
  actions: {
    increment() {
    //  this.count++
    },
  },
})

export const useTabs = defineStore('editor-tabs', {
  state: () => {
    return { value: 'svg' }
  },
  actions: {
    change(tab: string) {
      this.value = tab
    },
  },
})

export const useUploadSvgs = defineStore('upload-svgs', {
  state: () => {
    return {
      value: [] as UploadFileInfo[],
    }
  },
})
