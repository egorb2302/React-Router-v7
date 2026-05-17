export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // для тестирования React-компонентов
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'], // шаблон для тестовых файлов
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

