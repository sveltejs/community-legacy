// ssg rollup

import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import config from '@ssgjs/sapper/config/rollup.js'
import pkg from './package.json'
import { mdsvex } from 'mdsvex'
import path from 'path'
const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, onwarn) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning)
const dedupe = (importee) => importee === 'svelte' || importee.startsWith('svelte/')

const extensions = ['.svelte', '.svexy', '.svx', '.md']
const preprocess = mdsvex({
  // extension: '.svexy', // the default is '.svexy', if you lack taste, you might want to change it
  // layout: path.join(__dirname, './src/routes/_layout.svelte'), // this needs to be an absolute path
  // parser: md => md.use(SomePlugin), // you can add markdown-it plugins if the feeling takes you
  // // you can add markdown-it options here, html is always true
  // markdownOptions: {
  // 	typographer: true,
  // 	linkify: true,
  // 	highlight: (str, lang) => whatever(str, lang), // this should be a real function if you want to highlight
  // },
})

export default {
  client: {
    input: 'src/client.js',
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        extensions, // defined above
        preprocess, // defined above
      }),
      resolve(),
      // resolve({
      //   browser: true,
      //   dedupe,
      // }),
      commonjs(),
      // json(),
      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          runtimeHelpers: true,
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    onwarn,
  },

  server: {
    input: 'node_modules/ssg/defaultSrcFiles/server.js',
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      json(),
      svelte({
        generate: 'ssr',
        dev,
        extensions, // defined above
        preprocess, // defined above
      }),
      resolve(),
      // resolve({
      //   dedupe,
      // }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives')),
    ),

    onwarn,
  },

  serviceworker: {
    input: 'node_modules/ssg/defaultSrcFiles/service-worker.js',
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
}
