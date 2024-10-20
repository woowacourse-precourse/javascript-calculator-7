import { getCustomSeparator } from '../src/App.js';

describe('getCustomSeparator', () => {
  test('커스텀 구분자 분리 확인', () => {
    expect(getCustomSeparator('//;\\n1;2;3')).toBe(';');
  });

  test('커스텀 구분자가 없는 경우', () => {
    expect(getCustomSeparator('1,2,3')).toBe(null);
  });
});
