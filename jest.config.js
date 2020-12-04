module.exports = {
  roots: ['src'],
  testMatch: ['**/+(*.)+(spec|test).(ts|js)'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: 'tsconfig.json',
    },
  },
  verbose: true,
};
