import StringCalculator from '../classes/StringCalculator';

describe('StringCalculator', () => {
  test('정상 케이스. 숫자의 합을 반환', () => {
    const numbersArray = [1, 2, 3];
    const result = StringCalculator.sum(numbersArray);
    expect(result).toBe(6);
  });

  test('에러 케이스. 숫자가 아닌 문자 a가 포함되어 에러 발생', () => {
    const numbersArray = [1, 'a', 3];
    expect(() => {
      StringCalculator.validateNumbersArray(numbersArray);
    }).toThrow('[ERROR] a -> 숫자가 아닌 값입니다.');
  });

  // 추가 테스트 케이스

  test('에러 케이스. NaN이 포함된 경우 에러 발생', () => {
    const numbersArray = [1, NaN, 3];
    expect(() => {
      StringCalculator.validateNumbersArray(numbersArray);
    }).toThrow('[ERROR] NaN -> 숫자가 아닌 값입니다.');
  });

  test('에러 케이스. 음수가 포함된 경우 에러 발생', () => {
    const numbersArray = [1, -2, 3];
    expect(() => {
      StringCalculator.validateNumbersArray(numbersArray);
    }).toThrow('[ERROR] -2 -> 음수는 허용되지 않습니다.');
  });

  test('에러 케이스. undefined가 포함된 경우 에러 발생', () => {
    const numbersArray = [1, undefined, 3];
    expect(() => {
      StringCalculator.validateNumbersArray(numbersArray);
    }).toThrow('[ERROR] undefined -> 숫자가 아닌 값입니다.');
  });

  test('에러 케이스. null이 포함된 경우 에러 발생', () => {
    const numbersArray = [1, null, 3];
    expect(() => {
      StringCalculator.validateNumbersArray(numbersArray);
    }).toThrow('[ERROR] null -> 숫자가 아닌 값입니다.');
  });

  test('에러 케이스. 빈 문자열이 포함된 경우 에러 발생', () => {
    const numbersArray = [1, '', 3];
    expect(() => {
      StringCalculator.validateNumbersArray(numbersArray);
    }).toThrow('[ERROR]  -> 숫자가 아닌 값입니다.');
  });

  test('정상 케이스. 모든 숫자가 양의 정수일 때 합 반환', () => {
    const numbersArray = [100, 200, 300];
    const result = StringCalculator.sum(numbersArray);
    expect(result).toBe(600);
  });

  test('정상 케이스. 음수 없이 양수만 있을 때 합이 올바르게 반환', () => {
    const numbersArray = [1, 2, 3];
    const result = StringCalculator.sum(numbersArray);
    expect(result).toBe(6);
  });

  test('정상 케이스. 하나의 숫자만 있을 때 그 숫자 그대로 반환', () => {
    const numbersArray = [42];
    const result = StringCalculator.sum(numbersArray);
    expect(result).toBe(42);
  });

  test('정상 케이스. 빈 배열일 경우 합계는 0', () => {
    const numbersArray = [];
    const result = StringCalculator.sum(numbersArray);
    expect(result).toBe(0);
  });
});
