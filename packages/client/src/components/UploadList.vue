<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui'
import { NUpload } from 'naive-ui'
import { watch } from 'vue'
import { useUploadSvgs } from '../store'

const uploadSvgs = useUploadSvgs()

uploadSvgs.init()

async function onBeforeUpload(fileData: { file: UploadFileInfo }) {
  uploadSvgs.upload(fileData.file)

  return false
}
function onRemove(fileData: { index: number }) {
  uploadSvgs.remove(fileData.index)

  return true
}

watch(uploadSvgs, (svgs) => {
// wait for next repaint
  window.requestAnimationFrame(() => {
    const uploadList = document.querySelectorAll('.n-upload-file--image-card-type')
    if (uploadList?.length) {
      Array.from(uploadList).forEach((fileDom) => {
        fileDom.className = fileDom.className.replace(/(selected)|(shadow.+)/g, '')
      })
      const selectedSvgDom = uploadList[svgs.selectedIndex]

      selectedSvgDom.className += ' shadow-highlight-animate '
      setTimeout(() => {
        selectedSvgDom.className = selectedSvgDom.className.replace(/shadow.+/, '')
        selectedSvgDom.className += ' selected'
      }, 400)
    }
  })
})
</script>

<template>
  <NUpload
    class="p-[16px]"
    list-type="image-card"
    accept=".svg,.dot"
    :file-list="uploadSvgs.value"
    @before-upload="onBeforeUpload"
    @remove="onRemove"
    @preview="uploadSvgs.preview"
  />
</template>

<style  lang="less">
  .n-upload-trigger.n-upload-trigger--image-card {
    order: -1;

    .n-upload-dragger {
      border-radius: 8px;
    }
  }

  .n-upload-file-list .n-upload-file.n-upload-file--image-card-type {
    background-color: var(--color-bg-thumbnail);
    border-radius: 8px;

    &:hover {
      background-color: var(--color-bg-thumbnail-hover);
    }

    &.selected {
      border-color: var(--color-primary)
    }

  }

  .n-upload-file-info__action.n-upload-file-info__action--image-card-type {
    button {
      &:hover {
        color: var(--color-primary);
      }
    }
  }
</style>
