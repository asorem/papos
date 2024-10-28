import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig(
  {
    rootDir: 'packages/papos',
    entries: ['./index.ts'],
    declaration: true
  },
)
