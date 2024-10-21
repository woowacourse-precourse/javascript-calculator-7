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

    testCases.forEach(({ input, expected }) => {
      const inputSeparator = new InputSeparator();
      const result = inputSeparator.hasCustomDelimiter(input);
      expect(result).toBe(expected);
    });
  });

  describe('getCustomDelimiter 메서드 테스트', () => {
    test('getCustomDelimiter 메서드가 커스텀 구분자를 반환하는지 확인', () => {
      const testCases = [
        { input: '//:\\n2:3:4', expected: ':' },
        { input: '//\\\\n', expected: '\\' },
        { input: '', expected: null },
        { input: '/', expected: null },
        { input: '//', expected: null },
        { input: '\\n', expected: null },
        { input: '   \\n', expected: null },
        { input: '//\\n', expected: null },
        { input: '1,2,3', expected: null },
        { input: 'sadfa', expected: null },
      ];

      testCases.forEach(({ input, expected }) => {
        const inputSeparator = new InputSeparator();
        inputSeparator.getCustomDelimiter(input);
        const result = inputSeparator.getCustomDelimiter(input);
        expect(result).toBe(expected);
      });
    });
  });
});

describe('getNumberString 메서드 테스트', () => {
  test('getNumberString 메서드가 숫자 문자열을 반환하는지 확인', () => {
    const testCases = [
      { input: '//:\\n2:3:4', expected: '2:3:4' },
      { input: '//\\\\n', expected: '' },
      { input: '', expected: '' },
      { input: '/', expected: '/' },
      { input: '//', expected: '//' },
      { input: '\\n', expected: '\\n' },
      { input: '   \\n', expected: '   \\n' },
      { input: '//\\n', expected: '//\\n' },
      { input: '1,2,3', expected: '1,2,3' },
      { input: 'sadfa', expected: 'sadfa' },
    ];

    testCases.forEach(({ input, expected }) => {
      const inputSeparator = new InputSeparator();
      inputSeparator.getNumberString(input);
      const result = inputSeparator.getNumberString(input);
      expect(result).toBe(expected);
    });
  });
});
