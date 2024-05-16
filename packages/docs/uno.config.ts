import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify({}),
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      bgPrimary: 'var(--color-bg-primary)',
      textPrimary: 'var(--color-text-primary)',
      divider: 'var(--color-divider)',
    },
  },
  shortcuts: [{
    'icon-nav': 'ml-[16px] rd-[50%] p-[4px] color-primary shadow-highlight-animate',
    'shadow-highlight-animate': 'cursor-pointer animate-forwards animate-duration-0.4s animate-name-shadowOut  hover:animate-name-shadowIn',
  }],
})
