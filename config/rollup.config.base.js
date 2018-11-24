/**
 * @file rollup base
 * @author xiaozhihua
 * @date 2018-11-24 20:04:00
 */

import Babel from 'rollup-plugin-babel'
import Resolve from 'rollup-plugin-node-resolve'
import Commonjs from 'rollup-plugin-commonjs'

import Pkg from '../package.json'

export default {
	pkg: Pkg,
	input: 'src/index.js',
	ecBase: {
		output: [
			{
        file: Pkg.main,
        format: 'cjs' 
      },
			{
        file: Pkg.module,
        format: 'es'
      }
		]
	},
	umdPluginsBase: [
		Resolve(),
		Commonjs({
			include: 'node_modules/**'
		}),
		Babel({
			runtimeHelpers: true,
			exclude: 'node_modules/**'
		})
	]
}