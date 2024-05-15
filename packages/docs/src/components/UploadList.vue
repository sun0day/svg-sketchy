<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui'
import { NUpload } from 'naive-ui'
import { useUploadSvgs } from '../store'

const uploadSvgs = useUploadSvgs()

async function onBeforeUpload(fileData: { file: UploadFileInfo }) {
  uploadSvgs.value.unshift(
    { ...fileData.file, status: 'finished' },
  )
  return false
}
function onRemove(fileData: { index: number }) {
  uploadSvgs.value.splice(fileData.index, 1)
  return true
}
</script>

<template>
  <NUpload
    class="p-[16px]"
    list-type="image-card"
    accept=".svg,.dot"
    :file-list="uploadSvgs.value"
    @before-upload="onBeforeUpload"
    @remove="onRemove"
  />
</template>

<style  lang="less">
  .n-upload-file-list .n-upload-file:hover {
    background: rgba(243, 243, 245, 0.3);
  }

  .n-upload-trigger.n-upload-trigger--image-card {
    order: -1;

    .n-upload-dragger {
      border-radius: 8px;
    }
  }

  .n-upload-file-list .n-upload-file.n-upload-file--image-card-type {
    border-radius: 8px;
  }
</style>
