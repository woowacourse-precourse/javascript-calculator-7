import NumberConverter from '../src/converters/NumberConverter';

describe('NumberConverter', () => {
  test('숫자로 변환할 수 있는 문자를 올바르게 변환한다', () => {
    const input = '5';
    const output = 5;

    const result = NumberConverter.convertToNumber(input);

    expect(result).toBe(output);
  });

  test('숫자로 변환할 수 있는 문자열을 올바르게 변환한다', () => {
    const input = '53';
    const output = 53;

    const result = NumberConverter.convertToNumber(input);

    expect(result).toBe(output);
  });

  test('숫자로 변환할 수 없는 문자열은 예외를 발생시킨다', () => {
    const input = 'a';

    expect(() => NumberConverter.convertToNumber(input)).toThrow(
      '[ERROR] 숫자가 아닌 값을 입력할 수 없습니다.'
    );
  });

  test('음수 값을 검증하여 예외를 발생시킨다', () => {
    const input = -1;

    expect(() => NumberConverter.validate(input)).toThrow(
      '[ERROR] 음수는 허용되지 않습니다.'
    );
  });

  test('숫자로 변환할 수 있는 문자로 이루어진 배열을 올바르게 변환하고 검증한다', () => {
    const input = ['1', '2', '3'];
    const output = [1, 2, 3];

    const converter = new NumberConverter();
    const result = converter.convertAndValidate(input);

    expect(result).toEqual(output);
  });

  test('숫자로 변환할 수 없는 문자로 이루어진 배열은 예외를 발생시킨다', () => {
    const input = ['1', 'a', '3'];

    const converter = new NumberConverter();

    expect(() => converter.convertAndValidate(input)).toThrow(
      '[ERROR] 숫자가 아닌 값을 입력할 수 없습니다.'
    );
  });

  test('음수가 포함된 배열은 예외를 발생시킨다', () => {
    const input = ['1', '-2', '3'];

    const converter = new NumberConverter();

    expect(() => converter.convertAndValidate(input)).toThrow(
      '[ERROR] 음수는 허용되지 않습니다.'
    );
  });
});
