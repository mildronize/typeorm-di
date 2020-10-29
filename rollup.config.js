import typescript from '@rollup/plugin-typescript'
// import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: {
    // file: pkg.main,
    format: 'cjs',
    sourcemap: true,
    strict: false,
    dir: "dist"
  },
  plugins: [typescript()],
  external: [
    'typeorm',
    'typedi',
    'typeorm-typedi-extensions',
    'reflect-metadata',
  ],
}
