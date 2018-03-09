import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'reactBootstrap4Controls',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    postcss({
      modules: true,
      extensions: ['.css'],
      minimize: true,
    }),
    babel(),
    resolve({ extensions: ['.js', '.json', '.jsx'] }),
    commonjs(),
    uglify(),
  ],
};
