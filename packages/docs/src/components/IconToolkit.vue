<script setup lang="ts">
import { FormInst, NButton, NCheckbox, NFlex, NForm, NFormItem, NIcon, NSelect, NSwitch } from 'naive-ui'
import { RefreshSharp } from '@vicons/ionicons5'
import { useRefreshSvg } from '../store'

const refresher = useRefreshSvg()
</script>

<template>
  <NFlex class="position-absolute top-[8px] left-[8px]">
    <NButton circle size="small" class="ml-[6px] cursor-pointer" @click="refresher.refresh">
      <NIcon size="18">
        <RefreshSharp />
      </NIcon>
    </NButton>
  </NFlex>
</template>

<style lang="less">

</style>
