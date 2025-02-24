module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '../',
    testRegex: '.*\\.e2e-spec\\.ts$',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
  };
  