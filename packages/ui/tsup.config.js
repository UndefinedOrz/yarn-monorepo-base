const pkg = require('./package.json');

const external = [
  ...new Set([...Object.keys(pkg.peerDependencies || {}), ...Object.keys(pkg.dependencies || {})]),
];

/**
 * @type {import('tsup').Options}
 */
module.exports = {
  define: {
    __DEV__: process.env.NODE_ENV !== 'production',
  },
  // sourcemap: process.env.NODE_ENV !== 'production',
  minify: false,
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: true,
  dts: true,
  external,
  ignoreWatch: [
    '**/{.git,node_modules}/**',
    'dist',
    'src/**/*.spec.(ts|tsx)',
    'src/**/*.stories.tsx',
  ],
};
