<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider, NDivider, NFlex } from 'naive-ui'

import UploadList from './components/UploadList.vue'
import IconNav from './components/IconNav.vue'
import SvgPreview from './components/SvgPreview.vue'

const themeOverrides: GlobalThemeOverrides = {}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <IconNav />
    <UploadList />

    <NDivider />

    <NFlex justify="space-between">
      form
      <SvgPreview />
    </NFlex>
  </NConfigProvider>
</template>

<style scoped>
.n-divider:not(.n-divider--vertical) {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
