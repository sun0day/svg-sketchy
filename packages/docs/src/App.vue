<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider, NFlex } from 'naive-ui'

import HelloWorld from './components/HelloWorld.vue'
import UploadList from './components/UploadList.vue'
import IconNav from './components/IconNav.vue'
import SvgPreview from './components/SvgPreview.vue'

// import { downloadSvg  } from 'svg-sketchy.client-api'
const themeOverrides: GlobalThemeOverrides = {}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <IconNav />
    <UploadList />

    <Flex>
      form
      <SvgPreview />
    </Flex>
  </NConfigProvider>
</template>

<style scoped>

</style>
