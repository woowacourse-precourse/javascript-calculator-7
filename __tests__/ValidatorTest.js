import Validator from '../src/Validator.js';

describe('입력값 유효성 테스트', () => {
  test('숫자와 "//"로 시작하지 않는 경우 에러', () => {
    const startsWithNumber = '1:2:3';
    const startsWithDoubleSlash = '//a\\n1:2,3';
    const invalidStartString = '-1:2:3';

    expect(() => Validator.validateStartsWith(startsWithNumber)).not.toThrow();

    expect(() =>
      Validator.validateStartsWith(startsWithDoubleSlash),
    ).not.toThrow();

    expect(() => Validator.validateStartsWith(invalidStartString)).toThrow(
      '[ERROR] 입력값을 확인해 주세요',
    );
  });

  test('"//"로 시작한 문자열에 "\\n"이 존재하지 않는 경우 에러', () => {
    const input = '//a1:2:3,4';
    expect(() => Validator.validateCustomSeparator(input)).toThrow(
      '[ERROR] "\\n"을 포함시켜 주세요',
    );
  });

  test('커스텀 구분자로 빈 문자열 입력시 에러', () => {
    const input = '//\\n1:2:3';
    expect(() => Validator.validateCustomSeparator(input)).toThrow(
      '[ERROR] 커스텀 구분자를 입력해 주세요',
    );
  });

  test('커스텀 구분자로 "." 입력시 에러', () => {
    const input = '//.\\n1:2:3';
    expect(() => Validator.validateCustomSeparator(input)).toThrow(
      '[ERROR] "."은 커스텀 구분자로 사용할 수 없습니다.',
    );
  });

  test('커스텀 구분자로 숫자 입력시 에러', () => {
    const input = '//12\\n1:2:3';
    expect(() => Validator.validateCustomSeparator(input)).toThrow(
      '[ERROR] 숫자는 커스텀 구분자로 사용할 수 없습니다.',
    );
  });

  test('구분자외 다른 문자 포함시 에러', () => {
    const successInput = '1:2:3,4ab5';
    const failInput = '1:2:3,4a5';
    const customSeparator = 'ab';

    expect(() =>
      Validator.validateUsedSeparator(successInput, customSeparator),
    ).not.toThrow();

    expect(() =>
      Validator.validateUsedSeparator(failInput, customSeparator),
    ).toThrow('[ERROR] 커스텀 구분자 혹은 쉼표와 클론만 사용해 주세요');
  });

  test('구분자가 연속으로 등장하는 경우 에러', () => {
    const input = '1:2:3,4ab:5';
    const customSeparator = 'ab';

    expect(() =>
      Validator.validateUsedSeparator(input, customSeparator),
    ).toThrow('[ERROR] 구분자는 동시에 나올 수 없습니다.');
  });

  test('숫자 0을 입력시 에러', () => {
    const input = '1:0:3,4ab5';
    const customSeparator = 'ab';

    expect(() =>
      Validator.validateUsedSeparator(input, customSeparator),
    ).toThrow('[ERROR] 양수만 입력해 주세요');
  });
});
