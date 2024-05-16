<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider, NDivider, NFlex, darkTheme } from 'naive-ui'

import UploadList from './components/UploadList.vue'
import IconNav from './components/IconNav.vue'
import SvgPreview from './components/SvgPreview.vue'

const themeOverrides: GlobalThemeOverrides = {
  Divider: {
    color: 'var(--color-divider)',
  },
}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides" class="h-[100vh]" :theme="darkTheme">
    <IconNav />
    <NFlex vertical :size="[0, 0]" class="h-[100%]">
      <UploadList />

      <NDivider />

      <NFlex justify="space-between" class="flex-1">
        <div style="max-width: 200px; flex: 1">
          form
        </div>
        <SvgPreview />
      </NFlex>
    </NFlex>
  </NConfigProvider>
</template>

<style scoped>
.n-divider:not(.n-divider--vertical) {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
