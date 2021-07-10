const pkg = require('./package.json');

const fg = require('fast-glob');

const entryPoints = fg.sync(['src/*', 'src/format/*', 'src/const/*'], {
  cwd: __dirname,
  deep: true,
  ignore: ['src/format/index.ts', 'src/const/index.ts'],
  onlyFiles: true,
});

const external = [
  ...new Set([...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})]),
];

/**
 * @type {import('tsup').Options}
 */
module.exports = {
  entryPoints,
  format: ['cjs', 'esm'],
  splitting: true,
  dts: true,
  external,
  ignoreWatch: ['**/{.git,node_modules}/**', 'dist', 'src/**/*.spec.ts'],
};
