// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: ['text'],
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['jest-enzyme'],
  // setupFiles: [
  //   '<rootDir>/enzyme.config.js',
  // ],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  // testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
};
