import execa from 'execa'

export type InstallCommand = 'yarn' | 'npm'
let cmd: InstallCommand

export default async function getInstallCmd(): Promise<InstallCommand> {
  if (cmd) {
    return cmd
  }

  try {
    await execa('yarnpkg', ['--version'])
    cmd = 'yarn'
  } catch (e) {
    cmd = 'npm'
  }

  return cmd
}
