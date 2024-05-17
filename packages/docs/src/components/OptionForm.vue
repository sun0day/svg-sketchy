<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { FormInst } from 'naive-ui'
import { NButton, NCheckbox, NColorPicker, NForm, NFormItem, NIcon, NInputNumber, NScrollbar, NSelect, NSwitch } from 'naive-ui'
import { useSketchOptions, useToolVisible } from '../store'

const sketchOptions = useSketchOptions()
const formRef = ref<FormInst | null>(null)
const toolVisible = useToolVisible()
const fillStyleOptions = ['hachure', 'solid', 'zigzag', 'cross-hatch', 'dots', 'dashed', 'zigzag-line']
  .map(style => ({ label: style, value: style }))

watch(sketchOptions, (options) => {
  console.log(options.value)
})
</script>

<template>
  <NScrollbar :class="`${toolVisible.value.settings ? 'ml-0' : 'ml-[-250px]'} svg-option-form-container flex-1 max-w-[240px] p-[16px] max-h-[calc(100vh-128px)]`">
    <NForm ref="formRef" label-placement="left" size="large" class="svg-option-form">
      <NFormItem label="fill style">
        <NSelect v-model:value="sketchOptions.value.roughConfig.fillStyle" :options="fillStyleOptions" size="medium" />
      </NFormItem>
      <NFormItem label="roughness">
        <NInputNumber v-model:value="sketchOptions.value.roughConfig.roughness" size="medium" min="0" max="10" step="0.1" />
      </NFormItem>
      <NFormItem label="bowing">
        <NInputNumber v-model:value="sketchOptions.value.roughConfig.bowing" size="medium" min="0" max="10" step="0.1" />
      </NFormItem>
      <NFormItem label="background">
        <NColorPicker v-model:value="sketchOptions.value.backgroundColor" :modes="['hex']" :actions="['clear']" size="medium" />
      </NFormItem>
      <NFormItem label="randomize shape">
        <NSwitch v-model:value="sketchOptions.value.randomize" />
      </NFormItem>
      <NFormItem label="cursive font">
        <NSwitch v-model:value="sketchOptions.value.fontFamily" :unchecked-value="null" checked-value="Comic Sans MS, cursive" />
      </NFormItem>
      <NFormItem label="pencil filter">
        <NSwitch v-model:value="sketchOptions.value.pencilFilter" />
      </NFormItem>
      <NFormItem label="sketch patterns">
        <NSwitch v-model:value="sketchOptions.value.sketchPatterns" />
      </NFormItem>
    </NForm>
  </NScrollbar>
</template>

<style lang="less">
  .svg-option-form-container {
    border-right: 1px solid var(--color-divider);
    transition: margin-left  0.2s allow-discrete;
  }

.svg-option-form {
  .n-form-item .n-form-item-feedback-wrapper {
    min-height: 10px;
  }
}
</style>
