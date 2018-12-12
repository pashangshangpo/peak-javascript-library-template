/**
 * @file rollup prod
 * @author xiaozhihua
 * @date 2018-11-24 20:24:14
 */

import filesize from 'rollup-plugin-filesize'
import { uglify } from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

import BaseConfig, { Convert } from './rollup.config.base'

export default [
  {
    input: BaseConfig.input,
    output: {
      name: Convert(BaseConfig.pkg.name),
      file: BaseConfig.pkg.browser,
      format: 'umd',
    },
    plugins: BaseConfig.umdPluginsBase,
  },
  {
    input: BaseConfig.input,
    ...BaseConfig.ecBase,
  },
  {
    input: BaseConfig.input,
    output: {
      name: Convert(BaseConfig.pkg.name),
      file: `dist/${BaseConfig.pkg.name}.min.js`,
      format: 'umd',
    },
    plugins: [
      ...BaseConfig.umdPluginsBase,
      uglify(
        {
          compress: {
            drop_console: true,
          },
        },
        minify
      ),
      filesize(),
    ],
  },
]
