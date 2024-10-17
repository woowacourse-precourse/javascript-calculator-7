import Validation from '../../src/domain/Validation';

describe('유효성 검사 기능 테스트', () => {
  test('빈 문자열을 입력하면 에러가 발생한다.', () => {
    // given
    const INPUT = '';

    // then
    expect(() => {
      const string = new Validation(INPUT);
      return string;
    }).toThrow(
      '[ERROR] 빈 문자열입니다. 한 글자 이상의 문자열을 입력해주세요.',
    );
  });

  test.each([
    ['// \\n1 2 3 4 5'],
    ['!@#'],
    ['f'],
    ['//\\n123'],
    ['//0\\n10203'],
  ])('입력 형식에 맞지 않으면 에러가 발생한다.', (input) => {
    expect(() => {
      const string = new Validation(input);
      return string;
    }).toThrow(
      '[ERROR] 잘못된 형식을 입력했습니다. 쉼표(,) 또는 콜론(:)을 구분자로 하거나 문자열 앞부분의 "//"와 "\\n" 사이에 구분자를 가지는 문자열을 입력하세요.',
    );
  });

  test.each([
    ['5,4:3,-2:1,0'],
    ['5,4:3,2:1,0'],
    ['1:2,-1'],
    ['//^\\n0^1^2^3'],
    ['//^\\n1^-2^3^4^5^6'],
  ])('0 이하의 숫자를 입력하면 에러가 발생한다.', (input) => {
    expect(() => {
      const string = new Validation(input);
      return string;
    }).toThrow('[ERROR] 1 이상의 숫자를 구분자로 구분하여 입력해주세요.');
  });

  test.each([
    ['1:2,'],
    ['7a8a9'],
    ['1,2_3,4'],
    ['1:2,@'],
    ['15,4:w,2:1'],
    ['1!2!3'],
    ['//^\\n1^abcd^3^4^5^6'],
    ['//!!\\n1!!@#!!2'],
    ['//;\\n1;q;3'],
    ['//@\\n1!2,3'],
    ['//;\\n1;2,3;4;5;6'],
    ['//^\\n1^2^3^4^5^6^'],
  ])(
    '구분자 이전 혹은 다음에 숫자가 아닌 문자, 빈 문자를 입력하면 에러가 발생한다.',
    (input) => {
      expect(() => {
        const string = new Validation(input);
        return string;
      }).toThrow('[ERROR] 숫자가 아닌 다른 문자 혹은 빈 문자를 입력했습니다.');
    },
  );

  test.each([
    ['1'],
    ['1,2,3'],
    ['4:5,6'],
    ['7:8:9'],
    ['//;\\n1;2;3;4;5;6;7'],
    ['//!\\n1!2!3!4!5!6!7'],
    ['//!\\n1!2!3!4!5'],
  ])('입력값이 정상이면 에러가 발생하지 않는다.', (input) => {
    expect(() => {
      const string = new Validation(input);
      return string;
    }).not.toThrow();
  });
});
