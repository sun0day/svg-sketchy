import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify({}),
  ],
  shortcuts: [{
    'icon-nav': 'ml-[16px] rd-[50%] p-[4px] hover:color-[#18a058]',
    'shadow-highlight-animate': 'cursor-pointer animate-forwards animate-duration-0.4s animate-name-shadowOut  hover:animate-name-shadowIn',
  }],
})
