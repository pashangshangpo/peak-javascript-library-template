/**
 * @file rollup dev
 * @author xiaozhihua
 * @date 2018-11-24 20:18:32
 */

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
]
