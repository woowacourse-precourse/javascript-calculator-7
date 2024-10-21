import { computeResult } from '../src/App';

describe('computeResult', () => {
  test('유효한 값 계산', () => {
    expect(computeResult('', '1,2,3')).toBe(6);
  });

  test('[커스텀 구분자] 유효한 값 계산', () => {
    expect(computeResult(';', '1;2;3')).toBe(6);
  });

  test('NaN 값이 나오는 경우 [ERROR] 처리', () => {
    expect(() => computeResult(';', '1;abc;3')).toThrow('[ERROR]');
  });
});
