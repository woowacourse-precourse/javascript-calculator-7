import { validateUserInput } from '../src/App.js';

describe('validateUserInput', () => {
  test('음수 값 유효 검증', () => {
    expect(() => validateUserInput('', '-1,2,3')).toThrow('[ERROR]');
  });

  test('유효한 값 검증', () => {
    expect(() => validateUserInput('', '1,2,3')).not.toThrow();
  });

  test('[커스텀 구분자] 유효한 값 검증', () => {
    expect(() => validateUserInput(';', '1;2;3')).not.toThrow();
  });
});
