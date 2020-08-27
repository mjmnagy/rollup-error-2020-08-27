import vue from 'rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import htmlvue from 'rollup-plugin-htmlvue'
import path from 'path'

const Alias = alias({
  entries: [{ find: '@', replacement: path.resolve(__dirname) }]
})

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: './components/index.js',
    output: {
      format: 'esm',
      file: 'dist/ulibrary.esm.js',
      name: 'ulibrary.esm'
    },
    plugins: [vue(), Alias]
  },
  // SSR build.
  {
    input: './components/index.js',
    output: {
      format: 'cjs',
      file: 'dist/ulibrary.ssr.js',
      name: 'ulibrary.ssr'
    },
    plugins: [
      vue({
        template: { optimizeSSR: true },
        htmlMinifier: {
          removeRedundantAttributes: true
        }
      }),
      Alias
    ]
  },
  // Browser build.
  {
    input: './pkge/index.js',
    output: {
      format: 'iife',
      file: 'dist/ulibrary.js',
      name: 'ulibrary.iife'
    },
    plugins: [vue(), Alias]
  }
]
