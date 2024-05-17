<script setup lang="ts">
import { FormInst, NButton, NCheckbox, NFlex, NForm, NFormItem, NIcon, NSelect, NSwitch } from 'naive-ui'
import { RefreshSharp, SettingsSharp } from '@vicons/ionicons5'
import { useRefreshSvg, useToolVisible } from '../store'

const refresher = useRefreshSvg()
const toolVisible = useToolVisible()
</script>

<template>
  <NFlex class="position-absolute top-[8px] left-[8px] important-gap-[6px]">
    <NButton circle size="small" class=" cursor-pointer" @click="refresher.refresh">
      <NIcon size="18">
        <RefreshSharp />
      </NIcon>
    </NButton>
    <NButton circle size="small" :class="`cursor-pointer ${toolVisible.value.settings ? 'active' : 'unactive'}`" @click="toolVisible.toggleSettings">
      <NIcon size="18">
        <SettingsSharp />
      </NIcon>
    </NButton>
  </NFlex>
</template>

<style lang="less">
  .n-button.unactive {
    color: var(--color-text-primary) !important;
    .n-button__border {
      border-color: var(--color-border) !important;
    }
    .n-button__state-border {
      border-color: #0000 !important;
    }
  }
 .n-button:hover,.n-button.active {
    color: var(--color-primary) !important;
    .n-button__state-border,.n-button__border {
      border-color: var(--color-primary) !important;
    }
  }
</style>
