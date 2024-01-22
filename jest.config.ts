import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    '^@/components/(.*)$': '<rootDir>/components/$1',
  }
}
//  
export default createJestConfig(config)