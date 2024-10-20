import Validator from '../src/Validator.js';
import { errorMessages } from '../src/constant.js';
import Calculator from '../src/Calculator.js';

describe('Validator 테스트', () => {
  test('음수 예외 처리', async () => {
    const input = '//;\n-1;2,-3:4.44,-5.12';
    const validator = new Validator();

    await expect(validator.valid(input)).toEqual(false);
  });

  test('커스텀 구분자 사용', async () => {
    const input = '//;\\n1;2.2;3.33,4.444';
    const validator = new Validator();

    await expect(validator.valid(input)).toEqual(true);
  });

  test('기본 구분자 사용', async () => {
    const input = '1;2.2;3.33,4.444';
    const validator = new Validator();

    await expect(validator.valid(input)).toEqual(true);
  });

  test('구분자 오류 예외 처리', async () => {
    const input = '//;\\n1;2.2;3.33!4.444';

    await expect(() => new Calculator(input).add()).toThrow(errorMessages.invalidDelimiter);
  });

  test('커스텀 구분자 오류 예외 처리', async () => {
    const input = '//.\\n1;2.2;3.33,4.444';
    const validator = new Validator();

    await expect(() => validator.valid(input)).toThrow(errorMessages.invalidCustomDelimiter);
  });

  test('커스텀 구분자 미입력 예외 처리', async () => {
    const input = '//\\n1;2.2;3.33,4.444';
    const validator = new Validator();

    await expect(() => validator.valid(input)).toThrow(errorMessages.notInputCustomDelimiter);
  });

  test('커스텀 구분자 중복 입력 예외 처리', async () => {
    const input = '//,\\n1;2.2;3.33,4.444';

    await expect(() => new Calculator(input)).toThrow(errorMessages.duplicatedDelimiter);
  });
});
