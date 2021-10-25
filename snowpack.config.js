/* eslint-disable */
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/', resolve: false, static: false }
  },
  packageOptions: {
    source: 'local'
  },
  devOptions: {},
  buildOptions: {
    out: 'publish_esm',
    sourcemap: false,
    clean: true,
    metaUrlPath: '.'
  },
  optimize: {
    entrypoints: ['index.js'],
    target: 'es2020',
    minify: true,
    bundle: true,
    sourcemap: false
  },
  alias: {},
  plugins: []
};
