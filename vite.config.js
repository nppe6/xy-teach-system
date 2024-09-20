import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 自动导入字体
import Icons from 'unplugin-icons/vite'
import IconResolver from 'unplugin-icons/resolver'

import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconResolver({
          prefix: 'Icon'
        })
      ] // 自动导入 函数组件 api
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconResolver({
          enabledCollections: ['ep'] // 在vue中使用 就是 i-ep-图标的名字
        })
      ] // 自动导入 函数组件
    }),
    Icons({ autoInstall: true }),

    ElementPlus()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
