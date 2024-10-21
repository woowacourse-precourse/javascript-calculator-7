import InputSeparator from '../../src/application/parser/InputSeparator.js';

const TEST_CASES = [
  { input: '//:\\n2:3:4', hasCustom: true, customDelimiter: ':', numberString: '2:3:4' },
  { input: '//\\\\n', hasCustom: true, customDelimiter: '\\', numberString: '' },
  { input: '', hasCustom: false, customDelimiter: null, numberString: '' },
  { input: '/', hasCustom: false, customDelimiter: null, numberString: '/' },
  { input: '//', hasCustom: false, customDelimiter: null, numberString: '//' },
  { input: '\\n', hasCustom: false, customDelimiter: null, numberString: '\\n' },
  { input: '   \\n', hasCustom: false, customDelimiter: null, numberString: '   \\n' },
  { input: '//\\n', hasCustom: false, customDelimiter: null, numberString: '//\\n' },
  { input: '1,2,3', hasCustom: false, customDelimiter: null, numberString: '1,2,3' },
  { input: 'sadfa', hasCustom: false, customDelimiter: null, numberString: 'sadfa' },
];

describe('InputSeparator', () => {
  describe('hasCustomDelimiter 메서드 테스트', () => {
    test('hasCustomDelimiter 메서드가 커스텀 구분자 존재 여부를 올바르게 판별하는지 확인', () => {
      TEST_CASES.forEach(({ input, hasCustom }) => {
        const result = InputSeparator.hasCustomDelimiter(input);
        expect(result).toBe(hasCustom);
      });
    });
  });

  describe('getCustomDelimiter 메서드 테스트', () => {
    test('getCustomDelimiter 메서드가 커스텀 구분자를 반환하는지 확인', () => {
      TEST_CASES.forEach(({ input, customDelimiter }) => {
        const inputSeparator = new InputSeparator();
        const result = inputSeparator.getCustomDelimiter(input);
        expect(result).toBe(customDelimiter);
      });
    });
  });

  describe('getNumberString 메서드 테스트', () => {
    test('getNumberString 메서드가 숫자 문자열을 반환하는지 확인', () => {
      TEST_CASES.forEach(({ input, numberString }) => {
        const inputSeparator = new InputSeparator();
        const result = inputSeparator.getNumberString(input);
        expect(result).toBe(numberString);
      });
    });
  });
});
