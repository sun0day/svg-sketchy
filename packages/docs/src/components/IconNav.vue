<script setup lang="ts">
import { LogoGithub, LogoNpm } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
</script>

<template>
  <div fixed pos-right-24px pos-top-16px z-100>
    <a href="https://github.com/sun0day/svg-sketchy" target="_blank">
      <NIcon size="32" class="ml-[16px] cursor-pointer">
        <LogoGithub />
      </NIcon>
    </a>

    <a href="https://github.com/sun0day/svg-sketchy" target="_blank">
      <NIcon size="32" class="ml-[16px] cursor-pointer">
        <LogoNpm />
      </NIcon>
    </a>
  </div>
</template>
