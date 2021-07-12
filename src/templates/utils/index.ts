import { Template } from '../template'

interface ProjectArgs {
  name: string
  author: string
}
export const composePackageJson =
  (template: Template) =>
  ({ author, name }: ProjectArgs) => {
    return {
      ...template.packageJson,
      author,
      module: `dist/${name}.esm.js`,
      name,
      'size-limit': [
        {
          limit: '10 KB',
          path: `dist/${name}.cjs.production.min.js`
        },
        {
          limit: '10 KB',
          path: `dist/${name}.esm.js`
        }
      ]
    }
  }
