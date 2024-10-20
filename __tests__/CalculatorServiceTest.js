import CalculatorService from '../src/CalculatorService';

const startsWithDoubleSlash = '//ab\\n1:2ab3,4';
const startsWithNumber = '1:2,3';

describe(`계산기 비즈니스 로직 테스트`, () => {
  test(`사용자 입력값 검증`, () => {
    const failInput1 = '1,,2:3';
    const failInput2 = '0,2:3';
    const failInput3 = '//\\n1:2,3';

    expect(() =>
      CalculatorService.validateUserInput(failInput1).toThrow('[ERROR]'),
    );

    expect(() =>
      CalculatorService.validateUserInput(failInput2).toThrow('[ERROR]'),
    );

    expect(() =>
      CalculatorService.validateUserInput(failInput3).toThrow('[ERROR]'),
    );

    expect(() =>
      CalculatorService.validateUserInput(startsWithDoubleSlash).not.toThrow(),
    );
  });

  test('커스텀 구분자와 정제된 입력 반환', () => {
    expect(CalculatorService.parseUserInput(startsWithDoubleSlash)).toEqual({
      customSeparator: 'ab',
      processedUserInput: '1:2ab3,4',
    });

    expect(CalculatorService.parseUserInput(startsWithNumber)).toEqual({
      customSeparator: null,
      processedUserInput: startsWithNumber,
    });
  });

  test('문자열 더하기', () => {
    const splitedInput = '1:2,3ab4';
    const customSeparator = 'ab';

    expect(
      CalculatorService.sumUserInput(splitedInput, customSeparator),
    ).toEqual(10);
  });
});
