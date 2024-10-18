import { MissionUtils } from '@woowacourse/mission-utils';
import { printInputMessage, getUserInput } from './views/CalculatorView.js';
import { parseNumbers, calculate } from './models/CalculatorModel.js';

// View 테스트
describe('문자열 계산기 View', () => {
  test('입력 안내 문구 출력', () => {
    const consoleSpy = jest.spyOn(MissionUtils.Console, 'print');
    printInputMessage();
    expect(consoleSpy).toHaveBeenCalledWith('덧셈할 문자열을 입력해 주세요.');
    consoleSpy.mockRestore();
  });

  test('사용자 입력', () => {
    const consoleSpy = jest
      .spyOn(MissionUtils.Console, 'readLineAsync')
      .mockImplementation(() => Promise.resolve('1,2:3'));

    getUserInput((input) => {
      expect(input).toBe('1,2:3');
    });
    consoleSpy.mockRestore();
  });
});

// model 테스트
describe('문자열 계산기 model', () => {
  test('기본 구분자로 구분된 숫자 파싱', () => {
    const result = parseNumbers('4,5,6,7:8:9');
    expect(result).toEqual([4, 5, 6, 7, 8, 9]);
  });
  test('커스텀 구분자로 구분된 숫자 파싱', () => {
    const inputNum = '//!\n4!5!6!7!8,9';
    const result1 = parseNumbers(inputNum);
    expect(result1).toEqual([4, 5, 6, 7, 8, 9]);
  });

  test('에러 발생 시 프로그램 종료 테스트', () => {
    try {
      parseNumbers('1.2,3'); // 구분자가 잘못된 입력으로 에러 발생 예상
    } catch (error) {
      expect(error.message).toBe('구분자가 아닌 문자는 입력할 수 없습니다.');
      // 에러 발생 후 추가 로직이 없으면 사실상 프로그램 종료
    }
  });

  test('계산', () => {
    const result2 = calculate('5, 6');
    expect(result2).toEqual(11);
  });
});
