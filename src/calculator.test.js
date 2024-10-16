import { MissionUtils } from '@woowacourse/mission-utils';
import { printInputMessage } from './views/CalculatorView.js';

describe('문자열 계산기', () => {
  test('입력 안내 문구 출력', () => {
    const consoleSpy = jest.spyOn(MissionUtils.Console, 'print');
    printInputMessage();
    expect(consoleSpy).toHaveBeenCalledWith('덧셈할 문자열을 입력해 주세요.');
    consoleSpy.mockRestore();
  });
});
