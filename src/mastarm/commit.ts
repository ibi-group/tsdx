const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap

export default (): void => {
  // Needed to make it work directly when calling "tsdx commit"
  process.argv.pop()
  bootstrap({
    cliPath: require('commitizen'),
    config: {
      path: 'cz-conventional-changelog'
    }
  })
}
