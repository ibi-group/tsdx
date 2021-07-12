import { resolveApp } from './utils'

export const paths = {
  appConfig: resolveApp('tsdx.config.js'),
  appDist: resolveApp('dist'),
  appErrors: resolveApp('errors'),
  appErrorsJson: resolveApp('errors/codes.json'),
  appPackageJson: resolveApp('package.json'),
  appRoot: resolveApp('.'),
  appSrc: resolveApp('src'),
  jestConfig: resolveApp('jest.config.js'),
  progressEstimatorCache: resolveApp('node_modules/.cache/.progress-estimator'),
  testsSetup: resolveApp('test/setupTests.ts'),
  tsconfigJson: resolveApp('tsconfig.json')
}
