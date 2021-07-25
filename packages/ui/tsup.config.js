const pkg = require('./package.json')

const external = [
  ...new Set([...Object.keys(pkg.peerDependencies || {}), ...Object.keys(pkg.dependencies || {})]),
]

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('tsup').Options}
 */
module.exports = {
  minify: true,
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  pure: isProd ? ['console.log', 'console.warn', 'debugger'] : undefined,
  sourcemap: !isProd,
  splitting: false,
  external,
  ignoreWatch: [
    '**/{.git,node_modules}/**',
    'dist',
    'src/**/*.spec.(ts|tsx)',
    'src/**/*.stories.tsx',
  ],
}
