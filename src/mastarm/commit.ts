import path from 'path'

const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap

export default (): void => {
  process.argv.pop()
  bootstrap({
    cliPath: path.join(__dirname, '../../node_modules/commitizen'),
    config: {
      path: 'cz-conventional-changelog'
    }
  })
}
