import { MissionUtils } from '@woowacourse/mission-utils';
import { printInputMessage } from './views/CalculatorView.js';
import { parseNumbers } from './models/CalculatorModel.js';

// View 테스트
describe('문자열 계산기 View', () => {
  test('입력 안내 문구 출력', () => {
    const consoleSpy = jest.spyOn(MissionUtils.Console, 'print');
    printInputMessage();
    expect(consoleSpy).toHaveBeenCalledWith('덧셈할 문자열을 입력해 주세요.');
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
    const result1 = parseNumbers('//;\n4;5;6;7;8;9');
    expect(result1).toEqual([4, 5, 6, 7, 8, 9]);
  });
});
