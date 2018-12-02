/**
 * @file rollup base
 * @author xiaozhihua
 * @date 2018-11-24 20:04:00
 */

import Babel from 'rollup-plugin-babel'
import Resolve from 'rollup-plugin-node-resolve'
import Commonjs from 'rollup-plugin-commonjs'
import Replace from 'rollup-plugin-replace'
import Json from 'rollup-plugin-json'

import Pkg from '../package.json'

export const Convert = str => {
  let arr = str.split('-')
  let upperCase = arr
    .slice(1)
    .map(i => {
      return `${i[0].toUpperCase()}${i.slice(1)}`
    })
    .join('')

  return `${arr[0]}${upperCase}`
}

export default {
  pkg: Pkg,
  input: 'src/index.js',
  ecBase: {
    output: [
      {
        file: Pkg.main,
        format: 'cjs',
      },
      {
        file: Pkg.module,
        format: 'es',
      },
    ],
    plugins: [
      Replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      Json(),
      Babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
      }),
    ],
  },
  umdPluginsBase: [
    Replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    Resolve({
      jsnext: true,
      browser: true,
    }),
    Json(),
    Commonjs({
      include: 'node_modules/**',
    }),
    Babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
  ],
}
