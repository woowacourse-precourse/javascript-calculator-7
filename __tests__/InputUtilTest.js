import {
  sum,
  getCustomSeparator,
  getRemovedCustomSeparator,
  getSplitedBySeparator,
} from '../src/inputUitl';

const input = '//ab\\n1:2ab3';
const customSeparator = 'ab';

describe('사용자 입력값 처리 함수들 테스트', () => {
  test('커스텀 구분자 추출', () => {
    expect(getCustomSeparator(input)).toEqual('ab');
  });

  test('커스텀 구분자 제거된 입력값 추출', () => {
    expect(getRemovedCustomSeparator(input)).toEqual('1:2ab3');
  });

  test('입력값을 구분자로 분리한 배열 반환', () => {
    const input = '1:2ab3';

    expect(getSplitedBySeparator(input, customSeparator)).toEqual([
      '1',
      '2',
      '3',
    ]);
  });

  test('입력한 배열의 합 계산', () => {
    const input = ['1', '2', '3'];
    expect(sum(input)).toEqual(6);
  });
});
