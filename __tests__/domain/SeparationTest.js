import Separation from '../../src/domain/Separation.js';

describe('분리 기능 테스트', () => {
  test.each([
    ['1,2,3', [1, 2, 3]],
    ['1,2:3,4:5', [1, 2, 3, 4, 5]],
    ['//^\\n5^6^7', [5, 6, 7]],
    ['//abcd!@#\\n5abcd!@#6abcd!@#7', [5, 6, 7]],
    ['//@_@\\n10@_@11@_@12', [10, 11, 12]],
    ['//$\\n1$2$3$4$5', [1, 2, 3, 4, 5]],
    ['//^$*\\n1^$*2^$*3^$*4^$*5^$*6^$*7', [1, 2, 3, 4, 5, 6, 7]],
  ])(
    '구분자가 있는 문자열을 입력하면 숫자로 이루어진 배열이 반환된다.',
    (input, output) => {
      // when
      const numbers = new Separation(input).getNumbers();

      // then
      expect(numbers).toEqual(output);
    },
  );
});
