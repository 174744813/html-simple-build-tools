import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path'
export default {
  input: 'src/js/main.js',
  external: ['$',path.resolve( './node_modules/jquery' ),'_',path.resolve('./node_modules/underscore')],
  output: {
    file: 'dist/js/bundle.js',
    format: 'iife'
  },

  plugins: [ 
      json(),
      babel(),
      resolve({
    jsnext: true,
    main: true,
    browser: true,
  }),
  commonjs()
  ]
};