<script setup lang="ts">
import { LogoGithub, LogoNpm } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
</script>

<template>
  <div fixed pos-right-48px pos-top-16px z-100>
    <a href="https://github.com/sun0day/svg-sketchy" target="_blank">
      <NIcon size="24" class="icon-nav shadow-highlight">
        <LogoGithub />
      </NIcon>
    </a>

    <a href="https://github.com/sun0day/svg-sketchy" target="_blank">
      <NIcon size="24" class="icon-nav shadow-highlight">
        <LogoNpm />
      </NIcon>
    </a>
  </div>
</template>
