module.exports = {
  preset: 'ts-jest',
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  testEnvironment: 'jsdom',
}
