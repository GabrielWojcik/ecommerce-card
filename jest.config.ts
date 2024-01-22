// module.exports = {
//     "testEnvironment": "jsdom",
//     testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
//     bail: 1,
//     clearMocks: true,
//     collectCoverage: true,
//     collectCoverageFrom: ['components/**/*.js', 'pages/**/*.js'],
//     coverageReporters: ['lcov', 'text'],
//   };
import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})


 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  
  moduleNameMapper: {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    '^@/components/(.*)$': '<rootDir>/components/$1',
  }
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)