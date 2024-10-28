import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig(
  {
    rootDir: '.',
    entries: ['./index.ts'],
    declaration: true,
  },
)
