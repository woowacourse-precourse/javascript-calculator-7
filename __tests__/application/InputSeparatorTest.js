import InputSeparator from '../../src/application/parser/InputSeparator.js';

describe('hasCustomDelimiter 메서드 테스트', () => {
  test('hasCustomDelimiter 메서드가 커스텀 구분자 존재 여부를 올바르게 판별하는지 확인', () => {
    const testCases = [
      { input: '//:\\n2:3:4', expected: true },
      { input: '//\\\\n', expected: true },
      { input: '', expected: false },
      { input: '/', expected: false },
      { input: '//', expected: false },
      { input: '\\n', expected: false },
      { input: '   \\n', expected: false },
      { input: '//\\n', expected: false },
      { input: '1,2,3', expected: false },
      { input: 'sadfa', expected: false },
    ];

    const inputSeparator = new InputSeparator();

    testCases.forEach(({ input, expected }) => {
      const result = inputSeparator.hasCustomDelimiter(input);
      expect(result).toBe(expected);
    });
  });
});
